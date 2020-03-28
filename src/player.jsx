import React from 'react';
import rock from './images/rock.png';
import scissors from './images/scissor.png';
import paper from './images/paper.png';
import Chance from 'chance';


const playerTwoShape = () => {
  let chance = new Chance()
  let pickYourStudent = chance.pickone(["Karro", "Kayla",
    "Emma", "Jaime", "Blake", "Robin", "Carlos", "Mr.lau", "Philip",
    "Janko", "Pierre", "Daniel", "Hunter", "Anish", "Johan"])
  return pickYourStudent
}

const pickYourSentence = () => {
  let chance = new Chance()
  let pickYourSentence = chance.pickone([
    "Who's Your Daddy?", "Best demo ever, RIGHT!?", "Who's the man...I'm the man!",
    "Get Thomas excited!", "Adi what the fuck do I need to do now?", "hold your horses cowboy!",
    "I'm going to stop you right there!", "Yippee-ki-yay motherfucker!", "That's the way the cookie crumbles",
    "To be honest..Uhm", "Right...? right.. right right!", "BOOM!", "Isn't this amazing..? That's fucking amazing",
    "Uhm.. Don't jump all at once", "Good stuff.. GOOD STUFF!"])
  return pickYourSentence
}

export { pickYourSentence, playerTwoShape };
