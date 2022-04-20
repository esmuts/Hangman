import React from "react";
import "./WordBox.css";
// Import components
import LetterBox from "./LetterBox.js";

// This component renders a box containing the secret random word in the middle
// of the screen.

function WordBox(props) {
  /* Uncomment the log command below to see the random word in the console. */
  // console.log(props.word);

  // Converts received word prop to an array.
  const wordArray = Array.from(props.word);
  /*
    Map method creates a new array composed of either rendered letters or
    underscores, depending on whether the "match" value it retrieves is true
    or false.
  */
  const wordRender = wordArray.map((letter, index) => (
    <LetterBox
      // Key is generated using the array index.
      key={index}
      letter={letter}
      matchingLetters={props.matchingLetters}
      gameOver={props.gameOver}
    />
  ));

  return <div className="word-box">{wordRender}</div>;
}

export default WordBox;
