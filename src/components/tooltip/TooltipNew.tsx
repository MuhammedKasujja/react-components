import React, { useState } from "react";
import ReactDOM from "react-dom";

interface Props {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<Props> = ({ content, children }) => {
  // Position of the bottom edge of the anchor element.
  // Doubles as isVisible state: null means hidden
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    // Place the tooltip near the anchor's bottom edge on the screen
    const bounds = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: bounds.x,
      y: bounds.y + bounds.height,
    });
  };

  const handleMouseOut = () => setPosition(null);

  const anchorProps = {
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut
  };

  // Clones the child element to remove the div wrapper around it.
  // Child node must accept or forward mouse events.
  // We can't set even handlers on text, so we wrap it with <span>.
  const anchor = React.isValidElement(children) ? (
    React.cloneElement(children, anchorProps)
  ) : (
    <span {...anchorProps}>{children}</span>
  );

  // We use react portal to render the tooltip into document.body.
  // To place it near the button, we use the position from the event.
  // The position is "fixed" so it won't be affected by overflow rules.
  return (
    <>
      {anchor}
      {position &&
        ReactDOM.createPortal(
          <div
            style={{
              top: position.y,
              left: position.x,
              position: "fixed",
              paddingTop: 5,
              zIndex: 10,
              marginRight: '5px'
            }}
          >
            <div className="p-2 text-sm bg-black text-white rounded">
              {/* content */}
              {content}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;

// import React, { useState } from "react";
// // import "./index.css";

// import Portal from "./Portal";
// import Card from "../card/Card";
// import Button from "../button/Button";
// import TooltipPopover from "./popover/Popover";

// const btnRef = React.createRef<HTMLElement>();
// const App = () => {
//   const [isOn, setOn] = useState(false); // toggles dropdown visibility
//   const [coords, setCoords] = useState({left:0, top:0}); // takes current button coordinates

//   const updateTooltipCoords = button => {
//     const rect = button.getBoundingClientRect();
//     setCoords({
//       left: rect.x + rect.width / 2, // add half the width of the button for centering
//       top: rect.y + window.scrollY // add scrollY offset, as soon as getBountingClientRect takes on screen coords
//     });
//   };

//   return (
//     <Card>
//       <Button
//         ref={btnRef}
//         style={styles.button}
//         onClick={e => {
//           updateTooltipCoords(e.target);
//           setOn(!isOn);
//         }}
//       >
//         Click me
//       </Button>
//       {isOn && (
//         <Portal>
//           <TooltipPopover
//             coords={coords}
//             updateCoords={() =>
//               updateTooltipCoords(btnRef.current.buttonNode)
//             }
//           >
//             <div>
//               Awesome content that is never cut off by its parent container!
//             </div>
//           </TooltipPopover>
//         </Portal>
//       )}
//     </Card>
//   );
// };

// const styles = {
//   card: { padding: 50, maxWidth: 800, margin: "0 auto 300px" },
//   button: { display: "flex", marginLeft: "auto" }
// };

// export default App
