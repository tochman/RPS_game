describe("User can see game interface", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Displays RPS game title", () => {
        cy.contains("Welcome to RPS Game");
    });

    it('Can see all 4 buttons', () => {
        cy.contains('rock');
        cy.contains('paper');
        cy.contains('scissors');
        cy.contains('Start!')
    });

    it('Can Click the buttons', () => {
        cy.get('button#rock-button').click();
        cy.get('button#paper-button').click();
        cy.get('button#scissors-button').click();
        cy.get('button#startButton').click();
    });
});
