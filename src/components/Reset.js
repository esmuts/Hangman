import React from "react";
import "./Reset.css";

// This component renders a button that, when clicked, will reset the game.

class Reset extends React.Component {
  constructor(props) {
    super(props);

    // Binds 'this' keyword to the onClick call in the render() method.
    this.handleClick = this.handleClick.bind(this);
  }

  /*
    This method executes the callback function passed down from the grandparent
    component (App) to reset the state so that the game will reload.
  */
  handleClick() {
    this.props.resetEvent();
  }

  render() {
    return (
      <i className="bi bi-x-circle-fill reset" onClick={this.handleClick}></i>
    );
  }
}

export default Reset;
