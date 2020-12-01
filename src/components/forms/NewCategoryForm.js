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

export default function NewCategoryForm() {
  const dispatch = useDispatch();
  const [name, set_name] = useState("");
  const [color, set_color] = useState("");
  const history = useHistory();
  const { id } = useParams();

  function submitFormNewCategory(event) {
    event.preventDefault();
    dispatch(newCategory(name, color));
    history.push(`/inventory/${id}`);
  }

  return (
    <div>
      <Typography color="primary" variant="h4" style={{ margin: 30 }}>
        Add a new category
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
              defaultValue=""
              onChange={(e) => set_name(e.target.value)}
            />
          </FormControl>
        </div>
        <div style={{ margin: 30 }}>
          <FormControl>
            <TextField
              id="standard-required"
              label="Color"
              type="color"
              onChange={(e) => set_color(e.target.value)}
            />
            {/* <input
              type="color"
              value={color}
              onChange={(e) => set_color(e.target.value)}
            /> */}
          </FormControl>
        </div>
        <div style={{ margin: 30 }}>
          <FormControl>
            <Button
              size="small"
              variant="contained"
              color="default"
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
