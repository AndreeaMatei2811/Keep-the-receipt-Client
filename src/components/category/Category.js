import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../store/categories/actions";

import Product from "../../components/product/Product";
import { selectProducts } from "../../store/products/selectors";
import { useParams } from "react-router-dom";

export default function Category(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const products = useSelector(selectProducts);
  console.log("good products", products);

  const onDeleteCategory = (id) => {
    // event.preventDefault();
    dispatch(deleteCategory(id));
  };

  const filteredProductsByCategoryId = products.filter(
    (product) => product.categoryId === props.id
  );

  return (
    <div className="box">
      <h4>{props.name}</h4>
      <span>
        <Link to={`/inventory/${id}/${props.id}/newProduct`}>
          <button className="button">Add new product</button>
        </Link>
      </span>
      <span>
        {" "}
        <button className="button" onClick={() => onDeleteCategory(props.id)}>
          DELETE Category
        </button>
      </span>

      <thead>
        <tr style={{ background: `${props.color}` }}>
          <th>Add to cart</th>
          <th>Product name</th>

          <th>Store</th>
          <th>Price</th>
          <th>Unit</th>

          <th>Quantity</th>
          <th>Delete product</th>
        </tr>
      </thead>
      {filteredProductsByCategoryId.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            store={product.store}
            price={product.priceInEuro}
            unit={product.unit}
            lastBought={product.lastBought}
            quantity={product.quantity}
          />
        );
      })}
    </div>
  );
}
