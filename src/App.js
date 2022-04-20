/**
 * IFS L3T21 Capstone Project III – Create a React App (Hangman)
 *
 * @author Eckard Smuts
 *
 * I consulted the following sites for help:
 *
 * Updating the root API code to React 18 –
 * https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
 * https://blog.saeloun.com/2021/07/15/react-18-adds-new-root-api.html
 *
 * Fetching data from API in React –
 * https://www.geeksforgeeks.org/how-to-fetch-data-from-an-api-in-reactjs/
 *
 * Working with promises in JavaScript –
 * https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/
 * https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck
 *
 * Updating arrays in setState() –
 * https://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-react-js
 *
 * Using shouldComponentUpdate() –
 * https://www.tutorialspoint.com/reactjs-shouldcomponentupdate-method
 *
 * Calling random word API from App.js –
 * https://www.geeksforgeeks.org/random-quote-generator-app-using-reactjs/
 *
 * Random word API URL –
 * https://random-word-api.herokuapp.com/home
 */

import "./App.css";
// Import components
import Header from "./components/Header.js";
import Instructions from "./components/Instructions.js";
import Gallows from "./components/Gallows.js";
import WordBox from "./components/WordBox.js";
import AlphabetDisplay from "./components/AlphabetDisplay.js";
import Menu from "./components/Menu.js";
// Import React Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";

/**
 * The App component retrieves a random word from a Web API, and loads all the
 * other app components. The random word is passed to the 'WordBox' component,
 * as props.
 * */
class App extends React.Component {
  constructor(props) {
    super(props);
    // Binds callback functions to their calls in the render() method.
    this.handleGuessEvent = this.handleGuessEvent.bind(this);
    this.handleHelpEvent = this.handleHelpEvent.bind(this);
    this.handleResetEvent = this.handleResetEvent.bind(this);
    /*
      Sets default values for Apps state. The app can only load when the
      dataLoaded state is true, i.e. when the API fetch promise has been
      resolved. The gameOver state tells us whether the player has won or lost.
    */
    this.state = {
      randomWord: "",
      dataLoaded: false,
      clickedLetters: [],
      matchingLetters: [],
      failCounter: 0,
      gameOver: "",
      helpRequested: false,
    };
  }

  componentDidMount() {
    // Fetches a random word from a Web API –
    // * https://random-word-api.herokuapp.com/home
    fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then((response) => response.json())
      .then((json) => {
        // Sets the random word state to the retrieved word, and the dataLoaded
        // state to true.
        this.setState({ randomWord: json[0], dataLoaded: true });
      });
  }

  /*
    This method is the main syncing method. It is called by the click event in
    the LetterTile component. It receives the clicked-upon letter as a
    parameter and adds it to the clicked letter array stored in state. Then it
    compares the letter to the random word (also stored in state), to check if
    contains any matching letters. The matching letter array in state is
    updated accordingly.
  */
  handleGuessEvent(letter) {
    // Updates the clickedLetters array with the received letter value.
    this.setState((prevState) => ({
      clickedLetters: [...prevState.clickedLetters, letter],
    }));
    // If the random guess word includes the clicked upon letter, the matching
    // letters array is updated.
    if (this.state.randomWord.includes(letter.toLowerCase())) {
      this.setState((prevState) => ({
        matchingLetters: [...prevState.matchingLetters, letter.toLowerCase()],
      }));
      // Otherwise, the fail counter, which gets passed to the Gallows
      // component later on, is incremented by one.
    } else {
      this.setState((prevState) => ({
        failCounter: prevState.failCounter + 1,
      }));
    }
    // Checks the current game state, and updates the gameOver state if
    // necessary. The most recent array of matching letters is passed manually,
    // because state has not yet updated for the current cycle.
    const letterArray = this.state.matchingLetters;
    letterArray.push(letter.toLowerCase());
    this.checkGameState(letterArray);
  }

  // This custom method checks whether the game has been won or lost.
  checkGameState(letterArray) {
    // Checks for losing condition by inspecting the number of failed guesses.
    if (this.state.failCounter == 9) {
      this.setState({ gameOver: "lost" });
    }
    // Checks for winning condition by looping through randomWord and checking
    // if all its letters are contained in the matchingLetters array.
    let hasUnmatchedLetters = false;
    let word = this.state.randomWord;
    // Loop checks each character in word for match against array element.
    for (let i = 0; i < word.length; i++) {
      if (!letterArray.includes(word.charAt(i))) {
        hasUnmatchedLetters = true;
        break;
      }
    }
    // If no unmatched letters were found in the word, the game is won.
    if (hasUnmatchedLetters == false) {
      this.setState({ gameOver: "won" });
    }
  }

  // This method changes the state of "helpRequested", so that it can
  // be passed to the Instructions component. It is called by the "handleClick"
  // method in the "Help" component.
  handleHelpEvent() {
    this.setState((prevState) => ({ helpRequested: !prevState.helpRequested }));
  }

  // This method resets all the App component state, in effect reloading the
  // game.
  handleResetEvent() {
    this.setState({
      randomWord: "",
      dataLoaded: false,
      clickedLetters: [],
      matchingLetters: [],
      failCounter: 0,
      gameOver: "",
      helpRequested: false,
    });

    // Fetches a new random word from the Web API –
    // https://random-word-api.herokuapp.com/home
    fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then((response) => response.json())
      .then((json) => {
        // Sets the random word state to the retrieved word, and the dataLoaded
        // state to true.
        this.setState({ randomWord: json[0], dataLoaded: true });
      });
  }

  render() {
    // Checks the current state value of the random word API promise in order
    // to test if the page is ready to load.
    if (!this.state.dataLoaded) {
      // Returns message if the API fetch promise has not yet been resolved.
      return <h1 className="wait-message">Please wait one moment...</h1>;
      // If dataLoaded is true, the app can safely render.
    } else {
      return (
        <Container className="App">
          <Row className="app-header">
            <Header />
          </Row>
          <Row className="app-instructions">
            <Instructions
              // HelpRequested state informs the AlpahbetDisplay if the help
              // button has been clicked.
              helpRequested={this.state.helpRequested}
            />
          </Row>
          <Row className="app-gallows">
            <Gallows
              failCounter={this.state.failCounter}
              gameOver={this.state.gameOver}
            />
          </Row>
          <Row className="app-wordbox">
            <WordBox
              word={this.state.randomWord}
              // Passing an array of matching letters as props enables their
              // display.
              matchingLetters={this.state.matchingLetters}
              // Passes game state so that full word can be displayed on game
              // over.
              gameOver={this.state.gameOver}
            />
          </Row>
          <Row className="app-alphabet-display">
            <AlphabetDisplay
              // The handleGuessEvent is passed to the AlphabetDisplay as props
              // to enable syncing of state when a letter tile is clicked.
              guessEvent={this.handleGuessEvent}
              // clickedLetters tells the AlphabetDisplay component which letters to
              // render visibly, and which to hide.
              clickedLetters={this.state.clickedLetters}
              // gameOver state informs the AlphabetDisplay if the game has
              // been won or lost.
              gameOver={this.state.gameOver}
            />
          </Row>
          <Row className="app-menu">
            <Menu
              // The handleHelpEvent is passed to the AlphabetDisplay as props
              // to enable syncing of state when a letter tile is clicked.
              helpEvent={this.handleHelpEvent}
              resetEvent={this.handleResetEvent}
            />
          </Row>
        </Container>
      );
    }
  }
}

export default App;
