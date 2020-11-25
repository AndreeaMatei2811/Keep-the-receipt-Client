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
