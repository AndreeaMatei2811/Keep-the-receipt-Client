import React from "react";
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

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  return (
    <div className="App">
      {/* <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "navy",
              }}
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shopping-lists"
              activeStyle={{
                fontWeight: "bold",
                color: "navy",
              }}
            >
              Shopping Lists
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inventory"
              activeStyle={{
                fontWeight: "bold",
                color: "navy",
              }}
            >
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/budget"
              activeStyle={{
                fontWeight: "bold",
                color: "navy",
              }}
            >
              Budget
            </NavLink>
          </li>
        </ul>
      </nav> */}

      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shopping-lists" component={ShoppingListsPage} />
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/budget" component={BudgetPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
