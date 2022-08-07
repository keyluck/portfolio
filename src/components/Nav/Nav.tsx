import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SocialIcons } from "../SocialIcons";
import styles from "../../styles/styles.module.css";

export const Navigation = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Nav className={styles.navItems} defaultActiveKey="/">
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
      <Nav className={styles.navIcons}>
        <NavItem>
          <SocialIcons />
        </NavItem>
      </Nav>
    </Navbar>
  );
};
