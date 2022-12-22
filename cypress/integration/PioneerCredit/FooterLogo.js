/// <reference types="Cypress" />
import Footer from '../pageObjects/Footer';
describe('Regress Footer Logo', function() 
{
    before(function () {
        cy.fixture('pioneercreditfooter').then(function (data) {
          this.data = data;
        })
      })
 
it('Footer Logo',function() {
    const footer = new Footer()
    cy.viewport(1512,900)
    //Open Application Under Test (AUT) in browser
    cy.visit(Cypress.env('base_url'))
    //Verify website logo use correct asset
    footer.getFooterLogo()
        .invoke('attr','href')
        .should('eq', this.data.footer_logo_url)

 
 
 
 
 
 
 
 
 
 
 
//fixture
 
}  )
 
 
 
}  )