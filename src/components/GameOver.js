import React from "react";
import "./GameOver.css";

// This component displays an appropriate message for the game ending.

function GameOver(props) {
  if (props.gameOver == "lost") {
    return <h1>Game Over!</h1>;
  } else if (props.gameOver == "won") {
    return <h1>You won!</h1>;
  }
}

export default GameOver;
