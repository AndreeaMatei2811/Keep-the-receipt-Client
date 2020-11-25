import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { newCategory } from "../../store/categories/actions";

export default function NewCategoryForm() {
  const dispatch = useDispatch();
  const [name, set_name] = useState("");
  const [color, set_color] = useState("");

  function submitFormNewCategory(event) {
    event.preventDefault();
    dispatch(newCategory(name, color));
    <Redirect to="/inventory/:id" />;
  }

  return (
    <div>
      {" "}
      <h3>this the form for new category</h3>
      <form onSubmit={submitFormNewCategory}>
        <h2>Add a new category</h2>
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
            Color:{" "}
            <input
              type="color"
              value={color}
              onChange={(e) => set_color(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Add category</button>
        </p>
      </form>
    </div>
  );
}
