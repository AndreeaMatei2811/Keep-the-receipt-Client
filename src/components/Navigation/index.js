import React from "react";
import { Typography, Toolbar, AppBar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default function Navigation() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#2e7c31",
        dark: "#004f04",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#bf360c",
        dark: "#ba000d",
        contrastText: "#fff",
      },
    },
  });

  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div>
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    </div>
  );
}
