import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Alert from "@material-ui/lab/Alert";
import { Card, Typography } from "@material-ui/core";

export default function SignUp() {
  const [name, setName] = useState("");
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
    if (name === "" || email === "" || password === "") {
      set_message(true);
    } else if (name.length > 30 || email.length > 30 || password.length > 30) {
      set_messageLength(true);
    } else {
      dispatch(signUp(name, email, password));
      setEmail("");
      setPassword("");
      setName("");
    }
  }

  return (
    <div>
      <Typography variant="h4" style={{ margin: 20 }}>
        Signup
      </Typography>
      {message ? (
        <Alert severity="warning">Please fill in all fields</Alert>
      ) : (
        <div></div>
      )}
      {messageLength ? (
        <Alert severity="warning">Invalid input</Alert>
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
              defaultValue=""
              onChange={(event) => setName(event.target.value)}
            />
          </FormControl>
        </div>
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
              color="primary"
              type="submit"
              onClick={submitForm}
            >
              Sign up
            </Button>
          </FormControl>
        </div>
        {/* </Form> */}
      </Card>
      <div>
        <Link
          to="/login"
          style={{ textAlign: "center", textDecoration: "none" }}
        >
          <Button size="small" variant="contained" color="primary">
            Click here to log in
          </Button>
        </Link>
      </div>
    </div>
  );
}
