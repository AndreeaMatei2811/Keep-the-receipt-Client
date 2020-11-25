import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appLoading, appDoneLoading } from "../appState/actions";

export function categoriesFetched(allCategories) {
  return {
    type: "/categoriesFetched",
    payload: allCategories,
  };
}

export async function fetchCategories(dispatch, getState) {
  dispatch(appLoading());
  const res = await axios.get(`${apiUrl}/categories`);
  const allCategories = res.data;

  dispatch(categoriesFetched(allCategories));
  dispatch(appDoneLoading());
}
