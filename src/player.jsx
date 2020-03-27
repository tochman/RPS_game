import React from 'react';
import rock from './images/rock.png';
import scissors from './images/scissor.png';
import paper from './images/paper.png';
import Chance from 'chance';


const playerTwoShape = () => {
    let chance = new Chance()
    let pickYourStudent = chance.pickone(["karro", "kayla", 
    "emma", "jaime", "blake", "robin", "carlos", "Mr.lau", "philip", 
    "janko", "pierre", "daniel", "hunter", "anish", "johan"])
    return  pickYourStudent
  }

const sentenceShape = () => {

    return 
}

export {sentenceShape, playerTwoShape};
