import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Card, Typography } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default function Login() {
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, set_message] = useState(false);
  const [messageLength, set_messageLength] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();
    if (email === "" || password === "") {
      set_message(true);
    } else if (email.length > 30 || password.length > 30) {
      set_messageLength(true);
    } else {
      dispatch(login(email, password));
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Typography variant="h4" style={{ margin: 20 }}>
          Login
        </Typography>

        {message ? (
          <Alert severity="warning">
            Please fill in both email and password
          </Alert>
        ) : (
          <div></div>
        )}
        {messageLength ? (
          <Alert severity="warning">Invalid input</Alert>
        ) : (
          <div></div>
        )}

        <Card style={{ margin: 50 }}>
          <form onSubmit={submitForm}>
            <div style={{ margin: 30 }}>
              <FormControl>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormControl>
            </div>
            <div style={{ margin: 30 }}>
              <FormControl>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
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
                >
                  Log in
                </Button>
              </FormControl>
            </div>
          </form>
        </Card>
        <div>
          <Link
            to="/signup"
            style={{ textAlign: "center", textDecoration: "none" }}
          >
            <Button size="small" variant="contained" color="primary">
              Click here to sign up
            </Button>
          </Link>
        </div>
      </MuiThemeProvider>
    </div>
  );
}
