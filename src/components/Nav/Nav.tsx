import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SocialIcons } from "../SocialIcons";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export const Navigation = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container style={{ paddingLeft: "82px" }}>
        <Nav defaultActiveKey="/" className="mx-auto pl-2">
          <NavItem>
            {" "}
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>{" "}
          </NavItem>
          <NavItem>
            {" "}
            <NavLink className="nav-link" to="/projects">
              {" "}
              Projects
            </NavLink>{" "}
          </NavItem>
          <NavItem>
            {" "}
            <NavLink className="nav-link" to="/about">
              {" "}
              About
            </NavLink>{" "}
          </NavItem>
        </Nav>
        <SocialIcons />
      </Container>
    </Navbar>
  );
};
