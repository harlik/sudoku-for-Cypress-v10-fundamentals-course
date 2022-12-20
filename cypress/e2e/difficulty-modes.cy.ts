/// <reference types="Cypress" />
describe('re-generating game board when the mode changes', () => {
    it('should have exact number of filled cells', function() {
        cy.visit('/');
        cy.get('[name="status__difficulty-select"]')
            .as('modeSelector')
            .select('Easy');
        cy.get('.game__cell--filled')
            .as('filledCells')
            .should('have.length', 45);
        cy.get('@modeSelector')
            .select('Medium');
        cy.get('@filledCells')
            .should('have.length', 40);
        cy.get('@modeSelector')
            .select('Hard');
        cy.get('@filledCells')
            .should('have.length', 30);
    })

    it('the harder the mode, the less cells are filled', function() {
        cy.visit('/');
        cy.get('[name="status__difficulty-select"]')
            .as('modeSelector')
            .select('Easy');
        cy.get('.game__cell--filled')
            .as('filledCells')
            .its('length')
            .as('easyModeN');
        cy.get('@modeSelector')
            .select('Medium');
        cy.get('@filledCells')
            .its('length')
            .as('mediumModeN');
        cy.get('@modeSelector')
            .select('Hard');
        cy.get('@filledCells')
            .its('length')
            .as('hardModeN')
            .then(function() {
                expect(this.mediumModeN, 'medium is between easy and hard')
                    .to.be.greaterThan(this.hardModeN)
                    .and.lessThan(this.easyModeN);
            })
    })
})
