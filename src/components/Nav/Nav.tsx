import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import { SocialIcons } from "../SocialIcons";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export const Navigation = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container style={{ paddingLeft: "82px" }}>
        <Nav className="mx-auto pl-2">
          <NavItem>
            {" "}
            <Link className="nav-link" to="/">
              Home
            </Link>{" "}
          </NavItem>
          <NavItem>
            {" "}
            <Link className="nav-link" to="/projects">
              {" "}
              Projects
            </Link>{" "}
          </NavItem>
          <NavItem>
            {" "}
            <Link className="nav-link" to="/about">
              {" "}
              About
            </Link>{" "}
          </NavItem>
        </Nav>
        <SocialIcons />
      </Container>
    </Navbar>
  );
};
