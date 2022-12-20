/// <reference types="Cypress" />

describe('On game start', function() {
    it('should have 00:00 timer, mode "Easy", and 45 cells filled', function() {
        cy.visit('/');
        cy.clock();
        cy.get('.status__time')
            .should('have.text', '00:00');
        cy.get('.game__cell--filled')
            .should('have.length', 45);
        cy.get('[name="status__difficulty-select"]')
            .should('have.value', 'Easy');
    });
})
