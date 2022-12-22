/// <reference types="Cypress" />
import Header from '../pageObjects/Header'

describe('Regress Website Logo', function() 
{
    before(function () {
        cy.fixture('pioneercreditheader').then(function (data) {
          this.data = data;
        })
      })
 
it('Header Logo',function() {
    const header = new Header()
    cy.viewport(1512,900)
    //Open Application Under Test (AUT) in browser
    cy.visit(Cypress.env('base_url'))
    //Verify website logo use correct asset
    header.getHeaderLogo()
        .invoke('attr','src')
        .should('eq', this.data.website_logo_path)

 
 
 
 
 
 
 
 
 
 
 
//fixture
 
}  )
 
 
 
}  )