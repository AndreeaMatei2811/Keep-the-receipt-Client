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
      showMessageWithTimeout("success", false, response.data.message, 3000)
    );
    dispatch(addToShoppingListSucces(response.data.newProduct));

    dispatch(appDoneLoading());
  };
}
