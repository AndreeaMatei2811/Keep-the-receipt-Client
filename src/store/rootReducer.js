import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import categoriesReducer from "../store/categories/reducer";

export default combineReducers({
  appState,
  user,
  categories: categoriesReducer,
});
