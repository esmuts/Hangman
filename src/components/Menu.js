import React from "react";
import "./Menu.css";
// Import components
import Help from "./Help.js";
import Reset from "./Reset.js";

// The Menu is a simple wrapper component for the 'help' and 'reset' buttons.

function Menu(props) {
  return (
    <div className="menu">
      <Help helpEvent={props.helpEvent} />
      <Reset resetEvent={props.resetEvent} />
    </div>
  );
}

export default Menu;
