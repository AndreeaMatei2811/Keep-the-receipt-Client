import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg">
      <NavbarItem path="/" linkText="Home" />
      {/* <Navbar.Brand as={NavLink} to="/">
        Home
      </Navbar.Brand> */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          {/* {token ? (
            <NavbarItem path="/inventory" linkText="Go to inventory" />
          ) : (
            <div></div>
          )}
          {token ? (
            <NavbarItem
              path="/shopping-lists"
              linkText="Go to shopping lists"
            />
          ) : (
            <div></div>
          )}
          {token ? (
            <NavbarItem path="//budget" linkText="Go to budget" />
          ) : (
            <div></div>
          )} */}

          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
