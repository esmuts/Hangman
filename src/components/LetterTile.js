import React from "react";
import "./LetterTile.css";

// This component returns a tile with a letter in it, based on props received
// from the AlphabetDisplay component.
class LetterTile extends React.Component {
  constructor(props) {
    super(props);

    // Binds 'this' keyword to the onClick call in the render() method.
    this.handleClick = this.handleClick.bind(this);
  }

  /*
    This method executes the callback function passed down from the grandparent
    component (App), to ensure the syncing of data flow with other components
    (WordBox and Gallows). It passes the current letter prop as a parameter.
  */
  handleClick() {
    this.props.guessEvent(this.props.letter);
  }

  render() {
    // Returns a div containing the letter props, rendered visible or invisible
    // based on whether it is included in the 'clickedLetters' array received
    // as props.
    if (!this.props.clickedLetters.includes(this.props.letter)) {
      return (
        <span className="letter-tile" onClick={this.handleClick}>
          {this.props.letter}
        </span>
      );
    } else {
      return <span className="letter-tile clicked">{this.props.letter}</span>;
    }
  }
}

export default LetterTile;
