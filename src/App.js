import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import HomePage from "./pages/homePage/HomePage";
import ShoppingListsPage from "./pages/shoppingListsPage/ShoppingListsPage";
import InventoryPage from "./pages/inventoryPage/InventoryPage";
import BudgetPage from "./pages/budgetPage/BudgetPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { selectAppLoading } from "./store/appState/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shopping-lists" component={ShoppingListsPage} />
        <Route path="/inventory/:id" component={InventoryPage} />
        <Route path="/budget" component={BudgetPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
