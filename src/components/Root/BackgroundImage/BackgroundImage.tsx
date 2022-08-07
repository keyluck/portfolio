import React, { useEffect, useState, PropsWithChildren } from "react";
import { backgroundImage } from "../../../lib/util";
import { useLocation } from "react-router-dom";

export const BackgroundImage = ({ children }: PropsWithChildren<{}>) => {
  const [opacity, setOpacity] = useState<string>("1.0");
  const [currentRoute, setCurrentRoute] = useState<string>("/");
  const location = useLocation();
  const logoStyle: React.CSSProperties = {
    ...backgroundImage(),
    opacity: opacity,
  };

  const handleRouteChange = (s: string) => {
    setCurrentRoute(s);
    let opc = "1.0";
    if (s !== "/") {
      opc = "0.7";
    }
    setOpacity(opc);
  };

  useEffect(() => {
    handleRouteChange(location.pathname);
  }, [location]);

  return <div style={logoStyle}>{children}</div>;
};
