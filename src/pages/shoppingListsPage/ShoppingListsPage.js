import React, { useEffect, useState } from "react";
import { fetchShoppingList } from "../../store/shoppingList/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectShoppingList } from "../../store/shoppingList/selectors";
import { selectUser } from "../../store/user/selectors";

export default function ShoppingListsPage() {
  const dispatch = useDispatch();
  const shoppingList = useSelector(selectShoppingList);
  // const listToMap =
  const { id, name } = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchShoppingList(id));
  }, [dispatch, id]);

  console.log("my shopping list", shoppingList);

  return (
    <div>
      <h3> {name} Shopping Lists</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Ckeck</th>
              <th>Name</th>
              <th>Store</th>
              <th>Price</th>
              {/* <th>Delete</th> */}
            </tr>
          </thead>
        </table>
        {shoppingList.map((product) => {
          return (
            <div key={product.id}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <button className="button">check</button>
                    </td>
                    <td>{product.name}</td>
                    <td>{product.store}</td>
                    <td>{product.priceInEuro}</td>
                    {/* <td>
                      <button className="button">delete</button>
                    </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}
