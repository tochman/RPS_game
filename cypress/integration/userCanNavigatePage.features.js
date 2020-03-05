describe("User can see and navigate Starting page", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Displays title of the starting page", () => {
        cy.contains("Welcome to the classic Rock, Paper, Scissors!");
        cy.contains("Please read the game rules before starting the game.");
    });

    it("Checks if the paragraph exist", () => {
        cy.get('p#WelcomePageP').should('exist')
        cy.get('.WelcomePageP').should('exist')

    });

    it("Can click on the link to new game", () => {
        cy.get('#linkToGame').should('exist')
    });

    describe('to new Game and back', () => {
        beforeEach(() => {
            cy.get('#linkToGame').click();
        });

        it('displays Game page title', () => {
            cy.contains('Rock Paper Scissors');
        });

        it('displays component name in url', () => {
            cy.url().should("contain", "Game");
        })

        it('Display Starting page title', () => {
            cy.get('#backToRules').click();
            cy.contains('Welcome to the classic Rock, Paper, Scissors!');
        });

        it('displays component name in url', () => {
            cy.url().should("contain", "/");
        })
    })

    describe('User can go to Portafolio', () => {
        beforeEach(() => {
            cy.visit("/Game")
        });

        it('Displays new url', () => {
            cy.get('#toPortafolio').click();
            cy.url().should("contain", "https://jcruz.netlify.com");
        });
    })
});