/// <reference types="Cypress" />
import Footer from '../pageObjects/Footer'

describe('Regress Footer Copyrights', function() 
{
    before(function () {
        cy.fixture('pioneercreditfooter').then(function (data) {
          this.data = data;
        })
      })
 
it('Footer Copyrights',function() {
    const footer = new Footer()
    cy.viewport(1512,900)
    //Open Application Under Test (AUT) in browser
    cy.visit(Cypress.env('base_url'))
    //Contact Us
    //Verify URL
    footer.getFooterCopyrights()
      .should('have.text',this.data.footer_copyrights_text)
  
//fixture
 
}  )
 
 
 
}  )