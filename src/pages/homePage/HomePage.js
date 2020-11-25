import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

export default function HomePage() {
  const token = useSelector(selectToken);
  return (
    <div>
      <h3>This is the home page</h3>

      {token ? (
        <Link to={`/shopping-lists`}>
          <Button>Shopping Lists</Button>
        </Link>
      ) : (
        <div></div>
        // <Link to={`/login`}>
        //   <Button>Please log in</Button>
        // </Link>
      )}
      {token ? (
        <Link to={`/inventory`}>
          <Button>Inventory</Button>
        </Link>
      ) : (
        <div></div>
      )}
      {/* {token ? (
        <Link to={`/budget`}>
          <Button>Budget</Button>
        </Link>
      ) : (
        <div></div>
      )} */}
    </div>
  );
}
