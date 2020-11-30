import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../store/categories/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selectors";
import Category from "../../components/category/Category";
import { fetchProducts } from "../../store/products/actions";
import { selectUser } from "../../store/user/selectors";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";

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
      <Typography color="primary" variant="h6">
        Inventory
      </Typography>
      <div>
        {" "}
        <Link
          to={`/inventory/${id}/newCategory`}
          style={{ textDecoration: "none" }}
        >
          <Button color="primary" variant="contained">
            Add new category
          </Button>
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
