import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { Link } from "react-router-dom";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <Typography variant="h6" style={{ color: "#000" }}>
              <b> Keep the receipt</b>
            </Typography>
          </Link>
          {loginLogoutControls}
        </Toolbar>
      </AppBar>
    </div>
  );
}
