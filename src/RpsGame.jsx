import React, { Component } from 'react';
import { pickYourSentence, playerTwoShape } from './player';


class RpsGame extends Component {

  state = {
    playerTwo: "",
    sentence: ""
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: playerTwoShape(),
        sentence: pickYourSentence(),
      });
      if (counter > 10) {
        clearInterval(gameInterval);
      }
    }, 100);
  };

  render() {
    const { playerTwo} = this.state;
    const {sentence} = this.state;
    return (
      <>
        <div className="playerChild" id="playerTwo" >   
          <playerTwoShape>
          <h1>{`${playerTwo}  ${sentence}`}</h1>
          </playerTwoShape>
        <pickYourSentence />
        </div>

        <button className="startButton" type="button" id="startButton" onClick={this.startGame}>
          Go!
        </button>
      </>
    );
  }
}


export default RpsGame;
