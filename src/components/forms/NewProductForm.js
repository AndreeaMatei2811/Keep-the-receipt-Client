import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { newProduct } from "../../store/products/actions";
import { useHistory } from "react-router-dom";

export default function NewProductForm() {
  const dispatch = useDispatch();
  const [name, set_name] = useState("");
  const [store, set_store] = useState("");
  const [priceInEuro, set_priceInEuro] = useState("");
  const [unit, set_unit] = useState("");

  const [quantity, set_quantity] = useState("");

  const history = useHistory();
  const { id, categoryId } = useParams();

  function submitFormNewProduct(event) {
    event.preventDefault();
    dispatch(newProduct(categoryId, name, store, priceInEuro, unit, quantity));
    history.push(`/inventory/${id}`);
  }

  return (
    <div>
      {" "}
      <h3>this the form for new product</h3>
      <form onSubmit={submitFormNewProduct}>
        <h2>Add a new product</h2>
        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => set_name(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Store:{" "}
            <input
              type="text"
              value={store}
              onChange={(e) => set_store(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Price:{" "}
            <input
              type="text"
              value={priceInEuro}
              onChange={(e) => set_priceInEuro(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Unit:{" "}
            <input
              type="text"
              value={unit}
              onChange={(e) => set_unit(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Quantity:{" "}
            <input
              type="text"
              value={quantity}
              onChange={(e) => set_quantity(e.target.value)}
            />
          </label>
        </p>

        <p>
          <button type="submit">Add product</button>
        </p>
      </form>
    </div>
  );
}
