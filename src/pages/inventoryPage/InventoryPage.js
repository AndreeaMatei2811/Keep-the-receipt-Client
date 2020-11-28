import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../store/categories/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selectors";
import Category from "../../components/category/Category";
import { fetchProducts } from "../../store/products/actions";
import { selectUser } from "../../store/user/selectors";

export default function InventoryPage() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const { id } = useSelector(selectUser);
  console.log(id);
  console.log("do I get the categories?", categories);

  useEffect(() => {
    dispatch(fetchCategories(id));
    dispatch(fetchProducts(id));
  }, [dispatch, id]);

  return (
    <div>
      <h3>Your Inventory</h3>
      <div>
        {" "}
        <Link to={`/inventory/${id}/newCategory`}>
          <button className="button">Add a new category</button>
        </Link>
      </div>
      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            id={category.id}
            name={category.name}
            color={category.color}
            products={category.products}
          />
        );
      })}
    </div>
  );
}
