import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { newProduct } from "../../store/products/actions";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

import { Formik, Form } from "formik";
import { Card, Typography } from "@material-ui/core";

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
    // <div>
    //   {" "}
    //   <h3>this the form for new product</h3>
    //   <form onSubmit={submitFormNewProduct}>
    //     <h2>Add a new product</h2>
    //     <p>
    //       <label>
    //         Name:{" "}
    //         <input
    //           type="text"
    //           value={name}
    //           onChange={(e) => set_name(e.target.value)}
    //         />
    //       </label>
    //     </p>
    //     <p>
    //       <label>
    //         Store:{" "}
    //         <input
    //           type="text"
    //           value={store}
    //           onChange={(e) => set_store(e.target.value)}
    //         />
    //       </label>
    //     </p>
    //     <p>
    //       <label>
    //         Price:{" "}
    //         <input
    //           type="text"
    //           value={priceInEuro}
    //           onChange={(e) => set_priceInEuro(e.target.value)}
    //         />
    //       </label>
    //     </p>
    //     <p>
    //       <label>
    //         Unit:{" "}
    //         <input
    //           type="text"
    //           value={unit}
    //           onChange={(e) => set_unit(e.target.value)}
    //         />
    //       </label>
    //     </p>
    //     <p>
    //       <label>
    //         Quantity:{" "}
    //         <input
    //           type="text"
    //           value={quantity}
    //           onChange={(e) => set_quantity(e.target.value)}
    //         />
    //       </label>
    //     </p>

    //     <p>
    //       <button type="submit">Add product</button>
    //     </p>
    //   </form>
    // </div>

    <div>
      <Typography color="primary" variant="h4" style={{ margin: 30 }}>
        Add a new product
      </Typography>
      {/* <ColorPicker /> */}
      <Card style={{ margin: 50 }}>
        {/* <Form> */}
        <div style={{ margin: 30 }}>
          <FormControl>
            <TextField
              required
              id="standard-required"
              label="Name"
              onChange={(e) => set_name(e.target.value)}
            />
          </FormControl>
        </div>
        <div style={{ margin: 30 }}>
          <FormControl>
            <TextField
              id="standard-required"
              label="Store"
              onChange={(e) => set_store(e.target.value)}
            />
          </FormControl>
        </div>
        <div style={{ margin: 30 }}>
          <FormControl>
            <TextField
              id="standard-required"
              label="Price"
              onChange={(e) => set_priceInEuro(e.target.value)}
            />
          </FormControl>
        </div>
        <div style={{ margin: 30 }}>
          <FormControl>
            <TextField
              id="standard-required"
              label="Unit"
              onChange={(e) => set_unit(e.target.value)}
            />
          </FormControl>
        </div>
        <div style={{ margin: 30 }}>
          <FormControl>
            <TextField
              id="standard-required"
              label="Quantity"
              onChange={(e) => set_quantity(e.target.value)}
            />
          </FormControl>
        </div>
        <div style={{ margin: 30 }}>
          <FormControl>
            <Button
              size="small"
              variant="contained"
              color="default"
              type="submit"
              onClick={submitFormNewProduct}
            >
              Add product
            </Button>
          </FormControl>
        </div>
        {/* </Form> */}
      </Card>
    </div>
  );
}
