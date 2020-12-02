import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Card, Typography } from "@material-ui/core";

import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .max(30, "Password should be of max 30 characters length")
    .required("Password is required"),
});

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

  const formik = useFormik({
    initialValues: {
      email: email,
      password: password,
    },
    validationSchema: validationSchema,
    onSubmit: submitForm,
  });

  function submitForm(event) {
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
        <form onSubmit={submitForm}>
          <div style={{ margin: 30 }}>
            <FormControl>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                // value={formik.values.email}
                // onChange={formik.handleChange}
                onChange={(event) => setEmail(event.target.value)}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
                // value={formik.values.password}
                // onChange={formik.handleChange}
                onChange={(event) => setPassword(event.target.value)}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
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
    </div>
  );
}
