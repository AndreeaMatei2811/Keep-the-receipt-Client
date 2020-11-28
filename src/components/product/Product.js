import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../store/products/actions";
import { increaseQuantity } from "../../store/products/actions";
import { decreaseQuantity } from "../../store/products/actions";
import { addProductToShoppingList } from "../../store/shoppingList/actions";
import { showMessageWithTimeout } from "../../store/appState/actions";
import { selectShoppingList } from "../../store/shoppingList/selectors";

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
    if (quantity > 0) {
      dispatch(decreaseQuantity(productId, quantity - 1));
      set_quantity(quantity - 1);
    } else if (quantity === 0) {
      addToShopping(props.id);
    } else if (quantity < 0) {
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "Product already added to shopping list",
          3000
        )
      );
    }
  }

  // const productsInShoppingList = useSelector(selectShoppingList);
  // console.log("productsInShoppingList id", productsInShoppingList);
  // const shoppingProductsId = productsInShoppingList.map((product) => {
  //   return product.productId;
  // });
  // console.log("products id", shoppingProductsId);

  const addToShopping = (productId) => {
    // shoppingProductsId.includes(productId)
    //   ? dispatch(
    //       showMessageWithTimeout(
    //         "success",
    //         false,
    //         "Product already added to shopping list",
    //         3000
    //       )
    //     )
    //   : dispatch(addProductToShoppingList(productId));

    dispatch(addProductToShoppingList(productId));
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
