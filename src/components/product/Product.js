import React from "react";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/products/actions";

// import { useParams } from "react-router-dom";

export default function Product(props) {
  const dispatch = useDispatch();
  //   const { id } = useParams();

  const onDeleteProduct = (id) => {
    // event.preventDefault();

    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <div>
        <table className="table">
          <tbody key={props.id}>
            <tr>
              <td>
                <button className="button">add</button>
              </td>
              <td>{props.name}</td>
              {/* <td>{props.picture}</td> */}
              <td>{props.store}</td>
              <td>{props.priceInEuro}</td>
              <td>{props.unit}</td>
              <td>{props.lastBought}</td>
              <td>
                <button className="button">-</button> {props.quantity}{" "}
                <button className="button">+</button>
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
