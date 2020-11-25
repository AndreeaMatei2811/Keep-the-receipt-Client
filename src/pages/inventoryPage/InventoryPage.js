import React, { useEffect } from "react";
import { fetchCategories } from "../../store/categories/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selectors";
import Category from "../../components/category/Category";

export default function InventoryPage() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  useEffect(() => {
    dispatch(fetchCategories);
  }, [dispatch]);
  return (
    <div>
      <h3>Your Inventory</h3>
      {categories.map((category) => {
        return <Category name={category.name} color={category.color} />;
      })}
    </div>
  );
}
