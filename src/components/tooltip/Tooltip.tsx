import { useState } from "react";
import "./Tooltip.css";

type TooltipProps = {
  delay?: number;
  direction?: "top" | "left" | "right" | "bottom";
  content: string;
  children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = (props) => {
  const [timeout, setTooltipTimeout] = useState<number>();
  const [active, setActive] = useState(false);

  const showTip = () => {
    setTooltipTimeout(
      setTimeout(() => {
        setActive(true);
      }, props.delay || 400)
    );
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
          <div className={`Tooltip-Tip ${props.direction || "top"}`}>
            {/* Content */}
            {props.content}
          </div>
      )}
    </div>
  );
};

export default Tooltip;
