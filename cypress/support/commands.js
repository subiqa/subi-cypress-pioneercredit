// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('headerSearch', (keywords) => { 
    cy.get('form > #searchQuery')
        .type(keywords)
    cy.get('#nav > .search-box > .search-box__container > form > .search-box__btn')
        .click()
    cy.wait(3000)
    cy.url()
        .should('include','/search/?q=')
    cy.get('.site-search-results__summary > h3')
        .should('include.text','matching results for "' + keywords + '".')

})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })