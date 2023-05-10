import { useEffect } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode;
};

const Portal: React.FC<PortalProps> = ({ children }) => {
  const portal = document.getElementById("rct-portal");
  const el = document.createElement("div");

  useEffect(() => {
    portal?.appendChild(el);
    return () => {
      portal?.removeChild(el);
    };
  }, [el, portal]);

  return createPortal(children, el);
};

export default Portal;
