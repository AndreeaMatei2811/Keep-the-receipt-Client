import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { newProduct } from "../../store/products/actions";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import { Card, Typography } from "@material-ui/core";

export default function NewProductForm() {
  const dispatch = useDispatch();
  const [name, set_name] = useState("");
  const [store, set_store] = useState("");
  const [priceInEuro, set_priceInEuro] = useState("");
  const [unit, set_unit] = useState("");
  const [quantity, set_quantity] = useState("");
  const [message, set_message] = useState(false);
  const [messageLength, set_messageLength] = useState(false);

  const history = useHistory();
  const { id, categoryId } = useParams();

  function submitFormNewProduct(event) {
    event.preventDefault();
    if (name === "") {
      set_message(true);
    } else if (
      name.length > 30 ||
      store.length > 30 ||
      unit.length > 30 ||
      priceInEuro.length > 30 ||
      quantity.length > 30
    ) {
      set_messageLength(true);
    } else {
      dispatch(
        newProduct(categoryId, name, store, priceInEuro, unit, quantity)
      );
      history.push(`/inventory/${id}`);
    }
  }

  return (
    <div>
      <Typography variant="h4" style={{ margin: 20 }}>
        Add a new product
      </Typography>
      {message ? (
        <Alert severity="warning">Please fill in a name</Alert>
      ) : (
        <div></div>
      )}
      {messageLength ? (
        <Alert severity="warning">Invalid Input</Alert>
      ) : (
        <div></div>
      )}
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
