import React, { Component } from 'react';
import { Player, playerTwoShape } from './player';
import { Link } from "react-router-dom";


class RpsGame extends Component {

  state = {
    playerOne: "",
    playerTwo: "",
    winner: ""
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: playerTwoShape(),
        winner: ""
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (playerOne === playerTwo) {
      return "Oops it's a Tie!";
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return "Player One Wins!";
    } else {
      return "Player Two Wins!";
    }
  };

  selectShape = shape => {
    this.setState({
      playerOne: shape,
      winner: ""
    });
  };

  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <>
        <h1> Rock Paper Scissors</h1>
        <h1> Go!!</h1>

        <div className="playerChild"  id="playerOne" >
          <Player shape={playerOne} />
        </div>
        <div className="playerChild" id="playerTwo" >   
          <Player shape={playerTwo} />
        </div>

        <div>
          <button
            className="shapeBtn"
            id="rock-button"
            onClick={() => this.selectShape("rock")}
          >
            rock
          </button>

          <button
            className="shapeBtn"
            id="paper-button"
            onClick={() => this.selectShape("paper")}
          >
            paper
          </button>

          <button
            className="shapeBtn"
            id="scissors-button"
            onClick={() => this.selectShape("scissors")}
          >
            scissors
          </button>
        </div>

        <div className="winner">
          <p id="winnerMessage" >{winner ? this.selectWinner() : null}</p>
        </div>

        <button className="startButton" type="button" id="startButton" onClick={this.startGame}>
          Go!
        </button>

        <p id="toPortafolio" className="link"><a href= 'https://jcruz.netlify.com'>By Jaime</a></p>
        <Link id="backToRules" to="/">Go back</Link>

      </>
    );
  }
}


export default RpsGame;
