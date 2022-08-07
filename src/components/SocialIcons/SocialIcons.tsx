import React from "react";
import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";

export const SocialIcons = () => {
  return (
    <>
      <SocialIcon
        url="https://www.linkedin.com/in/nick-luckey-2b086970/"
        target="_blank"
        fgColor="#fff"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url="https://github.com/keyluck"
        target="_blank"
        fgColor="#000"
        bgColor="#fff"
        style={{ marginLeft: "10px", height: 35, width: 35 }}
      />
    </>
  );
};
