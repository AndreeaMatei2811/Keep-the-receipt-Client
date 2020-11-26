import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../store/categories/actions";

export default function Category(props) {
  const dispatch = useDispatch();
  const onDeleteCategory = (id) => {
    // event.preventDefault();
    dispatch(deleteCategory(id));
  };

  // const onDeleteProduct = (id) => {
  //   // event.preventDefault();

  //   dispatch(deleteProduct(id));
  // };

  return (
    <div className="box">
      <h4>{props.name}</h4>
      <span>
        <Link to={`/`}>
          <button className="button">Add new product</button>
        </Link>
      </span>
      <span>
        {" "}
        <button className="button" onClick={() => onDeleteCategory(props.id)}>
          DELETE Category
        </button>
      </span>
      <div>
        <table className="table">
          <thead>
            <tr style={{ background: `${props.color}` }}>
              <th>Add to cart</th>
              <th>Product name</th>
              <th>Picture</th>
              <th>Store</th>
              <th>Price</th>
              <th>Unit</th>
              <th>LastBought</th>
              <th>Quantity</th>

              <th>Delete product</th>
            </tr>
          </thead>
          {props.products.map((product) => {
            return (
              <tbody key={product.id}>
                <tr>
                  <td>
                    <button className="button">add</button>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.picture}</td>
                  <td>{product.store}</td>
                  <td>{product.priceInEuro}</td>
                  <td>{product.unit}</td>
                  <td>{product.lastBought}</td>
                  <td>
                    <button className="button">-</button> {product.quantity}{" "}
                    <button className="button">+</button>
                  </td>

                  <td>
                    <button
                      className="button"
                      //  onClick={() => onDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
