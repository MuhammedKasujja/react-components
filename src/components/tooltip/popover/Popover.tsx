import React, { useEffect } from "react";
import useDebounce from "src/hooks/useDebounce"

type Coords = {
  left: number;
  top: number;
};

type TooltipPopoverProps = {
  children: React.ReactNode;
  coords: Coords;
  updateCoords(coords: Coords): void;
};

const TooltipPopover: React.FC<TooltipPopoverProps> = ({
  children,
  coords,
  updateCoords,
}) => {
  const updateTooltipCoords = useDebounce(updateCoords, 100);

  useEffect(() => {
    window.addEventListener("resize", updateTooltipCoords);
    return () => window.removeEventListener("resize", updateTooltipCoords);
  }, []);

  return (
    <div
      style={{ ...styles.popover, ...coords as any}}
      className="ant-popover ant-popover-placement-top"
    >
      <div className="ant-popover-content">
        <div className="ant-popover-arrow" />
        <div className="ant-popover-inner" role="tooltip">
          <div>
            <div className="ant-popover-title">Title</div>
            <div className="ant-popover-inner-content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  popover: {
    position: "absolute",
    width: 200,
    transform: "translate(-100px, -100%)",
  },
};

export default TooltipPopover;
