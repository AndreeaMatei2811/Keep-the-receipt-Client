import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import { Formik, Form } from "formik";
import { Card, Typography } from "@material-ui/core";

export default function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Typography color="primary" variant="h4" style={{ margin: 30 }}>
        Login
      </Typography>
      <Card style={{ margin: 50 }}>
        {/* <Form> */}
        <div style={{ margin: 30 }}>
          <FormControl>
            <TextField
              required
              id="standard-required"
              label="Email"
              defaultValue=""
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>
        </div>
        <div style={{ margin: 30 }}>
          <FormControl>
            <TextField
              required
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
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
              onClick={submitForm}
            >
              Log in
            </Button>
          </FormControl>
        </div>
        {/* </Form> */}
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
    </div>
  );
}
