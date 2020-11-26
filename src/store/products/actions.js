import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectUser } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from "../appState/actions";

export function productsFetched(allProducts) {
  return {
    type: "/productsFetched",
    payload: allProducts,
  };
}

export const newProductSucces = (newProduct) => ({
  type: "newProductSucces",
  payload: newProduct,
});

export const deleteProductSuccess = (productId) => ({
  type: "deleteProductSuccess",
  payload: productId,
});

export function fetchProducts() {
  return async function thunk(dispatch, getState) {
    dispatch(appLoading());
    const { token } = selectUser(getState());
    const res = await axios.get(`${apiUrl}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const allProducts = res.data;

    dispatch(productsFetched(allProducts));
    console.log("what products do i get", allProducts);
    dispatch(appDoneLoading());
  };
}

export function newProduct(
  categoryId,
  name,
  store,
  price,
  unit,
  lastBought,
  quantity
) {
  return async (dispatch, getState) => {
    const { id, token } = selectUser(getState());

    dispatch(appLoading());
    const response = await axios.post(
      `${apiUrl}/products/${id}/${categoryId}/newProduct`,
      {
        name,
        store,
        price,
        unit,
        lastBought,
        quantity,
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
    dispatch(newProductSucces(response.data.newProduct));

    dispatch(appDoneLoading());
  };
}

export const deleteProduct = (productId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const { id, token } = selectUser(getState());
    try {
      const response = await axios.delete(
        `${apiUrl}/products/${id}/deleteProduct/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      showMessageWithTimeout("success", false, response.message, 3000);
      dispatch(deleteProductSuccess(productId));
      dispatch(appDoneLoading());
    } catch (e) {
      console.error(e);
    }
  };
};
