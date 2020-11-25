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
              {/* <th>Store</th>
              <th>Price</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>produs 1 nume</td>
              <td>produs 1 poza</td>
              {/* <td>
                <button className="button">buton</button>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
