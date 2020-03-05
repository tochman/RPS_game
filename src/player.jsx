import React from 'react';
import rock from './images/rock.png';
import scissors from './images/scissor.png';
import paper from './images/paper.png';
import Chance from 'chance';


const playerTwoShape = () => {
    let chance = new Chance()
    let playerTwoPick = chance.pickone(["rock", "paper", "scissors"])
    return playerTwoPick
  }

const Player = ({shape}) => {
    return (
        <div className="player">
        <img className="player-image" 
         src={
            shape === "rock" ? rock : shape === "scissors" ? scissors : paper
        }
        />        
        </div>
    )
}

export {Player, playerTwoShape};
