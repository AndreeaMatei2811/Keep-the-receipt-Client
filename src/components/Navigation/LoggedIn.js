import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "@material-ui/core/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();

  function logUserOut(event) {
    event.preventDefault();
    dispatch(logOut());
    history.push(`/`);
  }

  return (
    <>
      <Link to={`/inventory/${user.id}`} style={{ textDecoration: "none" }}>
        <Button color="primary">Inventory</Button>
      </Link>
      <Link to={`/shopping-lists`} style={{ textDecoration: "none" }}>
        <Button color="primary">Shopping Lists</Button>
      </Link>

      <Nav.Item style={{ padding: ".5rem 1rem" }}>
        Welcome <b>{user.name}</b>
      </Nav.Item>

      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={logUserOut}
      >
        Logout
      </Button>
    </>
  );
}
