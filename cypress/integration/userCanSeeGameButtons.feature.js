describe("User can see game interface", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Displays RPS game title", () => {
        cy.contains("Welcome to RPS Game");
    });

    it('Can see all 3 buttons', () => {
        cy.contains('Rock');
        cy.contains('Paper');
        cy.contains('Scissors');
    });

    it('Can Click the buttons', () => {
        cy.get('button#rock-button').click();
        cy.get('button#paper-button').click();
        cy.get('button#scissor-button').click();
    });

    describe('User can win/draw/lose', () => {

        it('Can choose the Rock button and win', () => {
            cy.get('button#rock-button').click();
            cy.get('p#gamble-message').should('contain', 'You won! against Scissors')
        });

        it('Can choose the Paper button and lose', () => {
            cy.get('button#paper-button').click();
            cy.get('p#gamble-message').should('contain', 'You lost! against Scissors')
        });

        it('Can choose the Scissors button and draw', () => {
            cy.get('button#scissor-button').click();
            cy.get('p#gamble-message').should('contain', 'You draw! against Scissors')
        });
    });
});
