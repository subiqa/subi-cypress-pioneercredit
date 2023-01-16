/// <reference types="Cypress" />
import Header from '../pageObjects/Header'

describe('Regress Header Button Links', function() 
{
    before(function () {
        cy.fixture('pioneercreditheader').then(function (data) {
          this.data = data;
        })
      })
 
it('Header Button Links',function() {
    const header = new Header()
    cy.viewport(1512,900)
    //Open Application Under Test (AUT) in browser
    cy.visit(Cypress.env('base_url'))
    //Verify Your Account button link has correct attributes value
    header.getHeaderYourAccountButton()
        .invoke('attr','href')
        .should('eq', this.data.header_your_account_button_href)
    header.getHeaderYourAccountButton()
        .invoke('attr','target')
        .should('eq', this.data.header_your_account_button_target)
    header.getHeaderYourAccountButton()
        .should('have.text',this.data.header_your_account_button_text)
    //Verify Contact Us button link has correct attributes value
    header.getHeaderContatUsButton()
        .invoke('attr','href')
        .should('eq', this.data.header_contact_us_href)
    header.getHeaderContatUsButton()
        .should('have.text',this.data.header_contact_us_button_text)
 
//fixture
 
}  )
 
 
 
}  )