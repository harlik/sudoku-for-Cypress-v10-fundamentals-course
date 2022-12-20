/// <reference types="Cypress" />

it('solves the game', function() {
    cy.visit('/');
    // ensure that the board is populated with numbers
    // could we use the initial state test here?
    cy.get('.game__cell--filled')
        .should('have.length', 45);
    cy.get('.game__cell:not(.game__cell--filled)')
        .each( cell => {
            cy.wrap(cell)
                .click()
                .should('have.class', 'game__cell--highlightselected');
            cy.get('.status__action-hint')
                .click();
        });
    cy.get('.overlay__text')
        .should('have.text', 'You solved it!')
        .and('be.visible');
})