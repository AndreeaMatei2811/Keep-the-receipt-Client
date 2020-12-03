import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import { useHistory, Link } from "react-router-dom";

import { Typography, Button } from "@material-ui/core";

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
      <div style={{ marginLeft: 100 }}>
        <Typography>
          Welcome <b>{user.name}</b>
        </Typography>
      </div>
      <Link
        to={`/inventory/${user.id}`}
        style={{ textDecoration: "none", marginLeft: 50 }}
      >
        <Button>Inventory</Button>
      </Link>
      <Link
        to={`/shopping-lists`}
        style={{ textDecoration: "none", marginLeft: 50 }}
      >
        <Button>Shopping Lists</Button>
      </Link>
      <div style={{ marginLeft: 150 }}>
        {" "}
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={logUserOut}
        >
          Logout
        </Button>{" "}
      </div>
    </>
  );
}
