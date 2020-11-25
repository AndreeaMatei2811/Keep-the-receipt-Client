import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectUser } from "../user/selectors";
import { appLoading, appDoneLoading } from "../appState/actions";

export function categoriesFetched(allCategories) {
  return {
    type: "/categoriesFetched",
    payload: allCategories,
  };
}

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
