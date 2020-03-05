describe('User can see win/lose/draw message', () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get('button#rock-button').click();
        cy.get('button#startButton').click();
        cy.wait(50);
    });

    it("Displays RPS game title", () => {
        cy.get("p#winnerMessage").to.be.a('string');
    });

    it('User can see the message displayed', () => {
        cy
            .get('p#winnerMessage')
            .should(($winnerMessage) => {
                expect($winnerMessage).to.be.a('string')
                expect($winnerMessage.first()).to.contain('Hello World')
            });
    });
});

