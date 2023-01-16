/// <reference types="Cypress" />
import Header from '../../integration/pageObjects/Header'

describe('Header Button Links - Desktop', function() 
{
    beforeEach(function () {
        cy.fixture('pioneercreditheader').then(function (data) {
          this.data = data;
        })
        cy.viewport(1512,900)
        cy.visit(Cypress.env('base_url'))
      })
 
    it('Your Account button is visible and has correct href, target, and text label',function() {
        const header = new Header()
        header.getHeaderYourAccountButton()
            .should('be.visible')
            .and('have.attr', 'href', this.data.header_your_account_button_href)
            .and('have.attr', 'target', this.data.header_your_account_button_target)
            .and('have.text', this.data.header_your_account_button_text)
    })

    it('Contact Us button is visible and has correct href, target, and text label',function() {
        const header = new Header()
        header.getHeaderContatUsButton()
            .should('be.visible')
            .and('have.attr', 'href', this.data.header_contact_us_href)
            .and('have.text',this.data.header_contact_us_button_text)
    })
})

describe('Header Button Links - Mobile', function() 
{
    beforeEach(function () {
        cy.fixture('pioneercreditheader').then(function (data) {
          this.data = data;
        })
        cy.viewport('iphone-xr')
        cy.visit(Cypress.env('base_url'))
      })
 
    it('Your Account button has correct href, target, and text label',function() {
        const header = new Header()
        cy.clickMobileHamburgerMenu()
        header.getHeaderYourAccountButtonMobile()
            .should('be.visible')
            .and('have.attr', 'href', this.data.header_your_account_button_href)
            .and('have.attr', 'target', this.data.header_your_account_button_target)
            .and('have.text', this.data.header_your_account_button_text)
    })

    it('Contact Us button has correct href, target, and text label',function() {
        const header = new Header()
        cy.clickMobileHamburgerMenu()
        header.getHeaderContatUsButtonMobile()
            .should('be.visible')
            .and('have.attr', 'href', this.data.header_contact_us_href)
            .and('have.text',this.data.header_contact_us_button_text)
    })
})