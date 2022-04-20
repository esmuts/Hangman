import React from "react";
import "./Instructions.css";

// This component renders a box containing instructions for playing the game.

function Instructions(props) {
  // Checks if help has been requested, in which case instructions are
  // displayd.
  if (props.helpRequested === true) {
    return (
      <div className="instructions">
        <h3>How to play</h3>
        <ul>
          <br />
          <li>{instructions1}</li>
          <br />
          <li>{instructions2}</li>
          <br />
          <li>{instructions3}</li>
          <br />
          <li>{instructions4}</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

// The text for the instructions to be displayed when the user clicks on the
// help icon.
const instructions1 =
  "Click one of the letters to start guessing the secret word.";
const instructions2 = "If you are right, matching letters will be revealed.";
const instructions3 =
  "But beware! If you are wrong, a gallows will appear. Too many wrong guesses, and it's game over...";
const instructions4 =
  "Click the '?' icon again to return to the game. Or, if you want to restart, click the 'X' icon.";

export default Instructions;
