import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function LoggedOut() {
  return (
    <>
      <Link to={`/login`} style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
    </>
  );
}
