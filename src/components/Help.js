import React from "react";
import "./Help.css";

// This component renders the clickable help button in the footer menu.

class Help extends React.Component {
  constructor(props) {
    super(props);
    // Binds 'this' keyword to the onClick call in the render() method.
    this.handleClick = this.handleClick.bind(this);
  }

  /*
    This method executes the callback function passed down from the grandparent
    component (App), to ensure the syncing of data flow with other components
  */
  handleClick() {
    this.props.helpEvent();
  }

  render() {
    return (
      <i
        className="bi bi-question-circle-fill help"
        onClick={this.handleClick}
      ></i>
    );
  }
}

export default Help;
