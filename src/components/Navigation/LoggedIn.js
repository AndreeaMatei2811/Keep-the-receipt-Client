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
      <div>
        <Link to={`/inventory/${user.id}`} style={{ textDecoration: "none" }}>
          <Button color="primary">Inventory</Button>
        </Link>
      </div>
      <div>
        <Link to={`/shopping-lists`} style={{ textDecoration: "none" }}>
          <Button color="primary">Shopping Lists</Button>
        </Link>
      </div>
      <div>
        Welcome <b>{user.name}</b>
      </div>
      <div>
        <Button
          size="small"
          variant="contained"
          color="default"
          onClick={logUserOut}
        >
          Logout
        </Button>{" "}
      </div>
    </>
  );
}
