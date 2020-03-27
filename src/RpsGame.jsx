import React, { Component } from 'react';
import { playerTwoShape } from './player';


class RpsGame extends Component {

  state = {
    playerTwo: "",
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: playerTwoShape(),
      });
      if (counter > 10) {
        clearInterval(gameInterval);
      }
    }, 100);
  };

  render() {
    const { playerTwo} = this.state;
    return (
      <>
        <div className="playerChild" id="playerTwo" >   
          <playerTwoShape>
          <h1>{playerTwo}</h1>
          </playerTwoShape>
        </div>

        <button className="startButton" type="button" id="startButton" onClick={this.startGame}>
          Go!
        </button>
      </>
    );
  }
}


export default RpsGame;
