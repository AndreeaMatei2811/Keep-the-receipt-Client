import React from "react";
import "./App.css";
import { Route, Switch, NavLink } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ShoppingListsPage from "./pages/shoppingListsPage/ShoppingListsPage";
import InventoryPage from "./pages/inventoryPage/InventoryPage";
import BudgetPage from "./pages/budgetPage/BudgetPage";

function App() {
  return (
    <div className="App">
      <nav>
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
      </nav>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shopping-lists" component={ShoppingListsPage} />
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/budget" component={BudgetPage} />
      </Switch>
    </div>
  );
}

export default App;
