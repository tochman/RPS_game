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

const pickYourSentence = () => {
    let chance = new Chance()
    let pickYourSentence = chance.pickone([
    "Who's Your Daddy?", "Best demo ever, RIGHT!?", "Who's the man...I'm the man!",
    "Get Thomas excited!", "Adi what the fuck do I need to do now?", "hold your horses cowboy!",
    "I'm going to stop you right there!","Yippee-ki-yay motherfucker!"
    ])   
    return pickYourSentence
}

export {pickYourSentence, playerTwoShape};
