import React from 'react'


const startingPage = () => {
    return (
        <div className="shapes">
            <h1>Welcome to the classic Rock, Paper, Scissors!</h1>
            <h2>Please read the game rules before starting the game.</h2>

            <p className="WelcomePageP">
            The game is played where players deliver hand signals
            that will represent the elements of the game; rock, paper and scissors.
            </p>
            <p className="WelcomePageP">
            The outcome of the game is determined by 3 simple rules:
            </p>
            <p>Rock wins against scissors.</p>
            <p>Scissors win against paper.</p>
            <p>Paper wins against rock.</p>
            <a href="/Game" class="button">Go to Game page!</a>
        </div>
    )
}

export default startingPage