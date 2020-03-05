describe('User can win/draw/lose', () => {

    it('Can choose the Rock button and win', () => {
        cy.get('button#rock-button').click();
        cy.get('p#winnerMessage').should('contain', 'Player One Wins!')
    });

    it('Can choose the Paper button and lose', () => {
        cy.get('button#paper-button').click();
        cy.get('p#winnerMessage').should('contain', 'Player Two Wins!')
    });

    it('Can choose the Scissors button and draw', () => {
        cy.get('button#scissor-button').click();
        cy.get('p#winnerMessage').should('contain', "Oops it's a Tie!")
    });
});