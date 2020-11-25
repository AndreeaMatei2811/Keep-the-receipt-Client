import React from "react";

export default function Category(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <div>
        <table className="table">
          <thead>
            <tr style={{ background: `${props.color}` }}>
              <th>Product name</th>
              <th>Picture</th>
              <th>Store</th>
              <th>Price</th>
              <th>Add to cart</th>
            </tr>
          </thead>
          {props.products.map((product) => {
            return (
              <tbody key={product.id}>
                <tr>
                  <td>{product.name}</td>
                  <td>{product.picture}</td>
                  <td>{product.store}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className="button">add</button>
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
