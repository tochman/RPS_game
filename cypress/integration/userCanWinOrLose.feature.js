describe('User can win/draw/lose', () => {
    beforeEach(() => {
        cy.get('button#rock-button').click();
        cy.get('button#startButton').click();
        cy.wait(6000);
    });

    it('Can choose the Rock button and win', () => {
        cy.get("playerTwo").then((header) => { 

            if (header.find('img').length > 0) { 
                cy.contains("Oops it's a Tie!")

            } else if (header.find('Account').length > 0) {
                cy.contains('Player One Wins!')
            
            } else {
                cy.contains('Player Two Wins!')
            }
    });

    it('Can choose the Rock button and win', () => {
        
        cy.get('button#startButton').click().then;
        cy.get('p#winnerMessage').should('contain', "Oops it's a Tie!")
            .or('contain', 'Player Two Wins!')
            .or('contain', 'Player One Wins!')
    });

    it('Can choose the Paper button and lose', () => {
        cy.get('button#paper-button').click();
        cy.get('button#startButton').click();
        cy.wait(6000);
        cy.get('p#winnerMessage').should('contain', 'Player Two Wins!')
    });

    it('Can choose the Scissors button and draw', () => {
        cy.get('button#scissor-button').click();
        cy.get('button#startButton').click();
        cy.wait(6000);
        cy.get('p#winnerMessage').should('contain', "Oops it's a Tie!" | "Player Two Wins!" | "Player One Wins!")
    });
});
    