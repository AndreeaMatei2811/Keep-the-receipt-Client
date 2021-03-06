import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import categoriesReducer from "../store/categories/reducer";
import productsReducer from "../store/products/reducer";
import shoppingListReducer from "../store/shoppingList/reducer";

export default combineReducers({
  appState,
  user,
  categories: categoriesReducer,
  products: productsReducer,
  shoppingList: shoppingListReducer,
});
