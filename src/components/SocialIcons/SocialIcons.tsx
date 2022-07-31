import React from "react";
import { SocialIcon } from "react-social-icons";

export const SocialIcons = () => {
  return (
    <>
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
    </>
  );
};
