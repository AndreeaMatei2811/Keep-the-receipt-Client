import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { newCategory } from "../../store/categories/actions";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { ColorPicker, ColorInput } from "material-ui-color-picker";

import { Formik, Form } from "formik";
import { Card, Typography } from "@material-ui/core";
import { showMessageWithTimeout } from "../../store/appState/actions";
import Alert from "@material-ui/lab/Alert";

export default function NewCategoryForm() {
  const dispatch = useDispatch();
  const [name, set_name] = useState("");
  const [message, set_message] = useState(false);
  const [messageLength, set_messageLength] = useState(false);
  const [color, set_color] = useState("");
  const history = useHistory();
  const { id } = useParams();

  function submitFormNewCategory(event) {
    event.preventDefault();
    if (name === "") {
      set_message(true);
      console.log("name", name);
    } else if (name.length > 30 || color.length > 30) {
      console.log("lenght", name.lenght);
      set_messageLength(true);
    } else {
      dispatch(newCategory(name, color));
      history.push(`/inventory/${id}`);
    }
  }

  return (
    <div>
      <Typography variant="h4" style={{ margin: 20 }}>
        Add a new category
      </Typography>
      {message ? (
        <Alert severity="warning">Please fill in a name</Alert>
      ) : (
        <div></div>
      )}
      {messageLength ? (
        <Alert severity="warning">Name to long, max 30 characters</Alert>
      ) : (
        <div></div>
      )}
      {/* <ColorPicker /> */}
      <Card style={{ margin: 50 }}>
        {/* <Form> */}
        <div style={{ margin: 30 }}>
          <FormControl>
            <TextField
              required
              id="standard-required"
              label="Name"
              value={name}
              onChange={(e) => set_name(e.target.value)}
            />
          </FormControl>
        </div>
        <div style={{ margin: 30 }}>
          <FormControl>
            <TextField id="color" label="Pick a color" />
            <input
              style={{ margin: 5, width: 150 }}
              type="color"
              value={color}
              onChange={(e) => set_color(e.target.value)}
            />
          </FormControl>
        </div>
        <div style={{ margin: 30 }}>
          <FormControl>
            <Button
              size="small"
              variant="contained"
              color="primary"
              type="submit"
              onClick={submitFormNewCategory}
            >
              Add category
            </Button>
          </FormControl>
        </div>
        {/* </Form> */}
      </Card>
    </div>
  );
}
