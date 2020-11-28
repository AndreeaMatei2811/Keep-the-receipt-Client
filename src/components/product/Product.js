import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/products/actions";
import { increaseQuantity } from "../../store/products/actions";
import { decreaseQuantity } from "../../store/products/actions";
import { addProductToShoppingList } from "../../store/shoppingList/actions";
import { Alert } from "react-bootstrap";

// import { useParams } from "react-router-dom";

export default function Product(props) {
  const [quantity, set_quantity] = useState(props.quantity);
  // console.log("what is quantity", quantity);

  const dispatch = useDispatch();

  const onDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  function onPlusProduct(productId) {
    dispatch(increaseQuantity(productId, quantity + 1));
    set_quantity(quantity + 1);
  }

  function onMinusProduct(productId) {
    dispatch(decreaseQuantity(productId, quantity - 1));
    set_quantity(quantity - 1);
  }

  const addToShopping = (productId) => {
    quantity > 0 ? (
      dispatch(addProductToShoppingList(productId))
    ) : (
      <Alert>Product added to shopping list</Alert>
    );
  };

  return (
    <div>
      <div>
        <table>
          <tbody key={props.id}>
            <tr>
              <td>
                <button
                  className="button"
                  onClick={() => addToShopping(props.id)}
                >
                  add
                </button>
              </td>
              <td>{props.name}</td>
              <td>{props.store}</td>
              <td>{props.price}</td>
              <td>{props.unit}</td>

              <td>
                <button
                  className="button"
                  onClick={() => onMinusProduct(props.id)}
                >
                  -
                </button>{" "}
                {quantity}{" "}
                <button
                  className="button"
                  onClick={() => onPlusProduct(props.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="button"
                  onClick={() => onDeleteProduct(props.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
