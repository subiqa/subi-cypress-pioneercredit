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
Cypress.Commands.add('clickMobileHamburgerMenu', () => {
    cy.get('.js-nav-toggle')
        .click()
})

Cypress.Commands.add('headerSearch', (keywords) => { 
    cy.get('.js-btn-search-box')
        .click()
    cy.wait(1000)    
    cy.get('form > #searchQuery')
        .type(keywords)
    cy.get('#nav > .search-box > .search-box__container > form > .search-box__btn')
        .click()
    cy.wait(1500)
})

Cypress.Commands.add('headerSearchMobile', (keywords) => {
    cy.get('input#searchQueryMobile')
        .click()
    cy.wait(1000)
    cy.get('input#searchQueryMobile')
        .type(keywords)
    cy.get('.js-nav-mobile > .js-search-box > .search-box__container > form > .search-box__btn')
        .click()

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