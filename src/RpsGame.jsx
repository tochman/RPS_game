import React, { Component } from 'react';
import { Player, playerTwoShape } from './player';

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
        <h1> Welcome to RPS Game </h1>

        <div>
          <Player shape={playerOne} />
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

        <button type="button" id="startButton" onClick={this.startGame}>
          Start!
        </button>

      </>
    );
  }
}


export default RpsGame;
