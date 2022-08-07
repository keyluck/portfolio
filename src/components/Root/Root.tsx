import React, { PropsWithChildren } from "react";
import { Nav } from "../Nav";
import { BackgroundImage } from "./BackgroundImage";

export const Root = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <BackgroundImage />
      <Nav />
      {children}
    </>
  );
};
