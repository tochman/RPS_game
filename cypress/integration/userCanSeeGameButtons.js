describe('User can see game interface', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    describe('Can see game title', () => {

        it('Displays RPS game title', () => {
            cy.contains('RPS Game')
        })
    })

    describe('Can see three buttons and click on them', () => {

        It('Can see all 3 buttons', () => {
            cy.contains('button#Paper');
            cy.contains('button#Rock');
            cy.contains('button#Scissors');
        })

        it('Can choose the Rock button and win', () => {
            cy.get('button#Rock').click();
            cy.get('p#win-message').should('contain', 'You have won! against Scissors')        
        })
        it('Can choose the Paper button and lost', () => {
            cy.get('button#Paper').click();
            cy.get('p#win-message').should('contain', 'You have lost! against Scissors')        
        })
        it('Can choose the Scissors button and draw', () => {
            cy.get('button#Scissors').click();
            cy.get('p#win-message').should('contain', 'You have draw! against Scissors')        
        })
    })
})