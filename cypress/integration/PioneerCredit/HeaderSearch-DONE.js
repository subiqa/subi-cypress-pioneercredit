/// <reference types="Cypress" />
import Header from '../pageObjects/Header'

describe('Regress Header Logo', function() 
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
    //Click on the search icon
    header.getHeaderSearchIcon()
      .click()
    //Type search keyword and search
    cy.headerSearch(this.data.header_search_keyword)
    cy.screenshot()
    

 
 
 
 
 
 
 
 
 
 
 
//fixture
 
}  )
 
 
 
}  )