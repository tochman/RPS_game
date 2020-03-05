describe('User can see win/lose/draw message', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Message should be a string", () => {
        cy.get('button#scissors-button').click();
        cy.get('button#startButton').click();
        expect('p#winnerMessage').to.be.a('string');
    });    

    it('User can see message after choosing paper', () => {
        cy.get('button#paper-button').click();
        cy.get('button#startButton').click();
        cy.wait(6000);
        cy.get('.winner').should('exist')
    });

    it('User can see message after choosing scissors', () => {
        cy.get('button#scissors-button').click();
        cy.get('button#startButton').click();
        cy.wait(6000);
        cy.get('.winner').should('exist')
    });

    it('User can see message after choosing rock', () => {
        cy.get('button#rock-button').click();
        cy.get('button#startButton').click();
        cy.wait(6000);
        cy.get('.winner').should('exist')
    });
});


