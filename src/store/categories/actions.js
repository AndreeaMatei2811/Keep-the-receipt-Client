import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectUser } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from "../appState/actions";

export function categoriesFetched(allCategories) {
  return {
    type: "/categoriesFetched",
    payload: allCategories,
  };
}

export const newCategorySucces = (newCategory) => ({
  type: "newCategorySucces",
  payload: newCategory,
});

export const deleteCategorySuccess = (categoryId) => ({
  type: "deleteCategorySuccess",
  payload: categoryId,
});

export function fetchCategories(id) {
  return async function thunk(dispatch, getState) {
    dispatch(appLoading());
    const { token } = selectUser(getState());
    const res = await axios.get(`${apiUrl}/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const allCategories = res.data;

    dispatch(categoriesFetched(allCategories));
    dispatch(appDoneLoading());
  };
}

export function newCategory(name, color) {
  return async (dispatch, getState) => {
    const { id, token } = selectUser(getState());

    dispatch(appLoading());

    const response = await axios.post(
      `${apiUrl}/categories/${id}/newCategory`,
      {
        name,
        color,
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
    dispatch(newCategorySucces(response.data.newCategory));
    dispatch(appDoneLoading());
  };
}

export const deleteCategory = (categoryId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const { id, token } = selectUser(getState());
    try {
      const response = await axios.delete(
        `${apiUrl}/categories/${id}/deleteCategory/${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      showMessageWithTimeout("success", false, response.message, 3000);
      dispatch(deleteCategorySuccess(categoryId));
      dispatch(appDoneLoading());
    } catch (e) {
      console.error(e);
    }
  };
};
