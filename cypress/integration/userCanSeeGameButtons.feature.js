describe('User can see game interface', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    
    it('Displays RPS game title', () => {
        cy.contains('Welcome to RPS Game')
    })

    It('Can see all 3 buttons', () => {
        cy.contains('button#Paper');
        cy.contains('button#Rock');
        cy.contains('button#Scissors');
    })

    describe('User can win/draw/lose', () => {

        it('Can choose the Rock button and win', () => {
            cy.get('button#Rock').click();
            cy.get('p#gamble-message').should('contain', 'You won! against Scissors')
        })

        it('Can choose the Scissors button and draw', () => {
            cy.get('button#Scissors').click();
            cy.get('p#gamble-message').should('contain', 'You draw! against Scissors')
        })

        it('Can choose the Paper button and lose', () => {
            cy.get('button#Paper').click();
            cy.get('p#gamble-message').should('contain', 'You lost! against Scissors')
        })
    })
})