import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default function LoggedOut() {
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
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Link
          to={`/login`}
          style={{ textDecoration: "none", marginLeft: "auto" }}
        >
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Link>
      </MuiThemeProvider>
    </>
  );
}
