import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./AlphabetDisplay.css";
// Import components
import LetterTile from "./LetterTile.js";
import GameOver from "./GameOver.js";

// This component renders the letters of the alphabet in the lower half of the
// screen.
class AlphabetDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Checks if the game has been won or lost.
    if (this.props.gameOver == "") {
      // Map function renders a tile component for each letter passed in from the
      // alphabet array.
      const tileAlphabet = alphabet.map((letter, index) => (
        <LetterTile
          // Key is generated using the array index.
          key={index}
          letter={letter}
          // The handleGuessEvent is passed to the LetterTile component as props to
          // enable syncing of state when a letter tile is clicked.
          guessEvent={this.props.guessEvent}
          // clickedLetters tells the LetterTile component which letters to
          // render visibly, and which to hide.
          clickedLetters={this.props.clickedLetters}
        />
      ));
      return <div className="alphabet-display">{tileAlphabet}</div>;
    } else {
      // Returns 'game over' message if game has been lost.
      return (
        <GameOver
          className="game-over-display"
          gameOver={this.props.gameOver}
        />
      );
    }
  }
}

// Custom alphabet array used for rendering letter tiles.
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default AlphabetDisplay;
