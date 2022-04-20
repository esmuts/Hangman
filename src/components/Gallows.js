import React from "react";
import "./Gallows.css";
// Import image files.
import gallows1 from "../assets/state1.GIF";
import gallows2 from "../assets/state2.GIF";
import gallows3 from "../assets/state3.GIF";
import gallows4 from "../assets/state4.GIF";
import gallows5 from "../assets/state5.GIF";
import gallows6 from "../assets/state6.GIF";
import gallows7 from "../assets/state7.GIF";
import gallows8 from "../assets/state8.GIF";
import gallows9 from "../assets/state9.GIF";
import gallows10 from "../assets/state10.GIF";
import gallows11 from "../assets/state11.GIF";

// This component displays the gallows image telling the user how close they are
// to losing the game. The images have been obtained from:
// https://www.hyperiondev.com

function Gallows(props) {
  // Returns a final hanging man image if the gameOver props is equal "lost".
  if (props.gameOver == "lost") {
    return (
      <img src={gallows11} alt="gallows pole" className="gallows-image"></img>
    );
  }

  // Returns the required image based on the number of failed guesses.
  switch (props.failCounter) {
    case 0:
      return (
        <img src={gallows1} alt="gallows pole" className="gallows-image"></img>
      );
    case 1:
      return (
        <img src={gallows2} alt="gallows pole" className="gallows-image"></img>
      );
    case 2:
      return (
        <img src={gallows3} alt="gallows pole" className="gallows-image"></img>
      );
    case 3:
      return (
        <img src={gallows4} alt="gallows pole" className="gallows-image"></img>
      );
    case 4:
      return (
        <img src={gallows5} alt="gallows pole" className="gallows-image"></img>
      );
    case 5:
      return (
        <img src={gallows6} alt="gallows pole" className="gallows-image"></img>
      );
    case 6:
      return (
        <img src={gallows7} alt="gallows pole" className="gallows-image"></img>
      );
    case 7:
      return (
        <img src={gallows8} alt="gallows pole" className="gallows-image"></img>
      );
    case 8:
      return (
        <img src={gallows9} alt="gallows pole" className="gallows-image"></img>
      );
    case 9:
      return (
        <img src={gallows10} alt="gallows pole" className="gallows-image"></img>
      );
  }
}

export default Gallows;
