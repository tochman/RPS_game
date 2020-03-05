describe("User can see game interface", () => {
    beforeEach(() => {
        cy.visit("/Game");
    });

    it("Displays title and subtitle", () => {
        cy.contains("Rock Paper Scissors");
        cy.contains("Go!!");
    });

    it('Can see all 4 buttons', () => {
        cy.contains('rock');
        cy.contains('paper');
        cy.contains('scissors');
        cy.contains('Go!')
    });

    it('Can Click the buttons', () => {
        cy.get('button#rock-button').click();
        cy.get('button#paper-button').click();
        cy.get('button#scissors-button').click();
        cy.get('button#startButton').click();
    });

    describe("User can see the images", () => {

        it('Shape images are visible', () => {
            cy.get('.shapeImage').should('exist')
        })
    });
});