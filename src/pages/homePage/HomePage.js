import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

export default function HomePage() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  return (
    <div>
      <Typography variant="h4" style={{ margin: 20 }}>
        Keep the receipt APP
      </Typography>

      {token ? (
        <Link to={`/shopping-lists`} style={{ textDecoration: "none" }}>
          <Button color="primary" variant="contained" style={{ margin: 30 }}>
            Go to your Shopping Lists
          </Button>
        </Link>
      ) : (
        <Link to={`/login`} style={{ textDecoration: "none" }}>
          <Button color="primary" variant="contained" style={{ margin: 30 }}>
            Please log in
          </Button>
        </Link>
      )}
      {token ? (
        <Link to={`/inventory/${user.id}`} style={{ textDecoration: "none" }}>
          <Button color="primary" variant="contained" style={{ margin: 30 }}>
            Go to your Inventory
          </Button>
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
      <Card>
        <Typography variant="h5" style={{ margin: 20 }}>
          What is the deal with this app
        </Typography>
        <Typography variant="h6" style={{ margin: 20 }}>
          Here is gonna be the coolest story about not buying more than you need
        </Typography>
      </Card>
    </div>
  );
}
