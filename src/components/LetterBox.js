import React from "react";
import "./LetterBox.css";

// This component returns either a rendered letter, or an underscore, depending
// on wether the "match" props received is true or false.

function LetterBox(props) {
  // If either of the game over conditions have been met, the full word is
  // rendered.
  if (!props.gameOver == "") {
    return <RenderedLetter letter={props.letter} />;
  } else {
    // Checks if the current letter iteration matches the last clicked-upon
    // matching letter, and returns a component accordinly.
    if (props.matchingLetters.includes(props.letter)) {
      return <RenderedLetter letter={props.letter} />;
    } else {
      return <Underscore />;
    }
  }
}

// Helper function returns a letter, based on the value of the received letter
// props.
function RenderedLetter(props) {
  return <div>{props.letter.toUpperCase()}</div>;
}

// Helper functiton returns an underscore.
function Underscore() {
  return <div>_</div>;
}

export default LetterBox;
