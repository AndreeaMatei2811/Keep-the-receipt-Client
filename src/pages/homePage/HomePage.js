import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default function HomePage() {
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
  const user = useSelector(selectUser);
  return (
    <div>
      <Typography variant="h4" style={{ margin: 20 }}>
        Keep the receipt
      </Typography>
      <MuiThemeProvider theme={theme}>
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
      )} */}{" "}
      </MuiThemeProvider>
      <Card>
        <Typography variant="h5" style={{ margin: 20 }}>
          <strong>About the app</strong>
        </Typography>
        <Typography variant="h6" style={{ margin: 20 }}>
          Keep the receipt app offers an easy way to always keep track of the
          stuff you already have so you don't buy what you don't need. You can
          optimize your expenses by taking advantage of the built in shopping
          list functionality. On top of this you can now easily organize your
          storage spaces by using the inventory management feature.
        </Typography>
        <Typography variant="h6" style={{ margin: 20 }}>
          Never run out of ingredients for your tasty homemade pizza. All you
          need to do is to... <strong>Keep the receipt!</strong>
        </Typography>
      </Card>
    </div>
  );
}
