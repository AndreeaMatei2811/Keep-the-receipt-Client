import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectUser } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from "../appState/actions";

export function addToShoppingListSucces(addedProduct) {
  return {
    type: "/addToShoppingListSucces",
    payload: addedProduct,
  };
}

export function shoppingListFetched(shoppingList) {
  return {
    type: "/shoppingListFetched",
    payload: shoppingList,
  };
}

export const checkProductSuccess = (productId) => ({
  type: "checkProductSuccess",
  payload: productId,
});

export function addProductToShoppingList(
  productId
  //   shoppingListId,
  //   shoppingQuantity
) {
  return async (dispatch, getState) => {
    const { id, token } = selectUser(getState());

    dispatch(appLoading());
    const response = await axios.post(
      `${apiUrl}/shoppingItems/${id}/addProduct`,
      {
        productId,
        // shoppingListId,
        // shoppingQuantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(
      showMessageWithTimeout("success", false, response.data.message, 4000)
    );
    dispatch(addToShoppingListSucces(response.data.addedProduct));
    // console.log("response after added product", response.data.addedProduct);
    dispatch(appDoneLoading());
  };
}

export function fetchShoppingList(id) {
  return async function thunk(dispatch, getState) {
    dispatch(appLoading());
    const { token } = selectUser(getState());
    const res = await axios.get(`${apiUrl}/shoppingLists/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const shoppingList = res.data;

    dispatch(shoppingListFetched(shoppingList));
    // console.log("what shopping list do i get", shoppingList);
    dispatch(appDoneLoading());
  };
}

export const checkProduct = (productId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const { id, token } = selectUser(getState());
    try {
      const response = await axios.delete(
        `${apiUrl}/shoppingItems/${id}/checkProduct/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("response after check", response);
      showMessageWithTimeout("success", false, response.message, 3000);
      dispatch(checkProductSuccess(productId));

      dispatch(appDoneLoading());
    } catch (e) {
      console.error(e);
    }
  };
};
