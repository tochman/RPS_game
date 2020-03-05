import React from 'react';
import rock from './images/rock.png';
import scissors from './images/scissor.png';
import paper from './images/paper.png';

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

export default Player;
