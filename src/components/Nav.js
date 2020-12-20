import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default function TestPage() {
  return (
    <React.Fragment>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Nav className="mx-auto pl-2">
          <NavItem>
            {" "}
            <Link exact className="nav-link" to="/">
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
        <SocialIcon
          url="https://www.linkedin.com/in/nick-luckey-2b086970/"
          className=""
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://github.com/keyluck"
          className="ml-2"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
      </Navbar>
    </React.Fragment>
  );
}
