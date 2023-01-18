/// <reference types="Cypress" />
import Header from '../../../integration/pageObjectsPioneerCredit/Header'

describe('Header Logo - Desktop', function() 
{
    beforeEach(function () {
        cy.fixture('PioneerCredit/pioneercreditheader').then(function (data) {
          this.data = data;
        })
        cy.viewport(1512,900)
        cy.visit(Cypress.env('base_url'))
    })
 
    it('Header Logo is visible and has correct img',function() {
        const header = new Header()
        header.getHeaderLogoImg()
            .should('be.visible')
            .and('have.attr', 'src', this.data.website_logo_path)
    })

    it('Header Logo has correct url',function() {
        const header = new Header()
        header.getHeaderLogo()
            .should('have.attr', 'href', '/')
    })
})

describe('Header Logo - Mobile', function() 
{
    beforeEach(function () {
        cy.fixture('PioneerCredit/pioneercreditheader').then(function (data) {
          this.data = data;
        })
        cy.viewport('iphone-xr')
        cy.visit(Cypress.env('base_url'))
    })
 
    it('Header Logo is visible and has correct img',function() {
        const header = new Header()
        header.getHeaderLogoImg()
            .should('be.visible')
            .and('have.attr', 'src', this.data.website_logo_path)
    })

    it('Header Logo has correct url',function() {
        const header = new Header()
        header.getHeaderLogo()
            .should('have.attr', 'href', '/')
    })
})