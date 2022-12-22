/// <reference types="Cypress" />
import Footer from '../pageObjects/Footer'

describe('Regress Footer Buttons', function() 
{
    before(function () {
        cy.fixture('pioneercreditfooter').then(function (data) {
          this.data = data;
        })
      })
 
it('Footer Buttons',function() {
    const footer = new Footer()
    cy.viewport(1512,900)
    //Open Application Under Test (AUT) in browser
    cy.visit(Cypress.env('base_url'))
    //Contact Us
    //Verify URL
    footer.getFooterContactUs()
      .invoke('attr','href')
      .should('eq',this.data.footer_contact_us_link_url)
    //Verify text
    footer.getFooterContactUs()
      .should('have.text',this.data.footer_contact_us_link_text)
    //Your LinkedIn
    //Verify URL
    footer.getFooterLinkedIn()
    .invoke('attr','href')
    .should('eq',this.data.footer_linkedin_link_url)
    footer.getFooterLinkedIn()
    .invoke('attr','target')
    .should('eq','_blank')
    //Verify text
    footer.getFooterLinkedIn()
      .should('have.text',this.data.footer_linkedin_link_text)

//fixture
 
}  )
 
 
 
}  )