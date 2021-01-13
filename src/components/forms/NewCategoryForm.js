import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useParams, useHistory } from "react-router-dom";
import { newCategory } from "../../store/categories/actions";

import { Typography, TextField, FormControl, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default function NewCategoryForm() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#2e7c31",
        dark: "#004f04",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#bf360c",
        dark: "#ba000d",
        contrastText: "#fff",
      },
    },
  });
  const dispatch = useDispatch();
  const [name, set_name] = useState("");
  const [message, set_message] = useState(false);
  const [messageLength, set_messageLength] = useState(false);
  const [color, set_color] = useState("#ffffff");
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
      <MuiThemeProvider theme={theme}>
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

        <form>
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
        </form>
      </MuiThemeProvider>
    </div>
  );
}
