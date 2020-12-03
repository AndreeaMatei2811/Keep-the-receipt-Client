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

export const increaseQuantitySuccess = (quantity) => ({
  type: "increaseQuantity",
  payload: quantity,
});
export const decreaseQuantitySuccess = (quantity) => ({
  type: "decreaseQuantity",
  payload: quantity,
});

export function fetchProducts(id) {
  return async function thunk(dispatch, getState) {
    dispatch(appLoading());
    const { token } = selectUser(getState());
    const res = await axios.get(`${apiUrl}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const allProducts = res.data;

    dispatch(productsFetched(allProducts));
    // console.log("what products do i get", allProducts);
    dispatch(appDoneLoading());
  };
}

export function newProduct(
  categoryId,
  name,
  store,
  priceInEuro,
  unit,
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
        priceInEuro,
        unit,
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

export const decreaseQuantity = (productId, quantity) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());

    dispatch(appLoading());

    const response = await axios.patch(
      `${apiUrl}/products/${productId}/decrease`,
      {
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response);
    // dispatch(showMessageWithTimeout("success", false, response.message, 3000));
    dispatch(decreaseQuantitySuccess(response.data));
    console.log("what is my response after decrease", response.data.quantity);
    dispatch(appDoneLoading());
  };
};

export const increaseQuantity = (productId, quantity) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());

    dispatch(appLoading());

    const response = await axios.patch(
      `${apiUrl}/products/${productId}/increase`,
      {
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response);

    // dispatch(
    //   showMessageWithTimeout("success", false, "update successfull", 3000)
    // );
    dispatch(increaseQuantitySuccess(response.data));
    // console.log("do I get responde", response.data);
    dispatch(appDoneLoading());
  };
};
