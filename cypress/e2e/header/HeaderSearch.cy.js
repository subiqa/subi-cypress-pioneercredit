/// <reference types="Cypress" />
import Header from '../../integration/pageObjects/Header'

describe('Header Search - Desktop', function() 
{
    beforeEach(function () {
        cy.fixture('pioneercreditheader').then(function (data) {
          this.data = data;
        })
        cy.viewport(1512,900)
        cy.visit(Cypress.env('base_url'))
      })
 
      it('Search for a keyword will redirect user to Search results page and return list of related pages',function() {
          cy.headerSearch(this.data.header_search_keyword)
          cy.url()
            .should('include','/search/?q=')
          cy.get('.site-search__input > #searchQuery')
            .should('have.attr', 'value', this.data.header_search_keyword)
          cy.get('.site-search-results__summary > h3')
            .should('include.text','matching results for "' + this.data.header_search_keyword + '".')
          cy.get('.site-search-results__details > ul > li')
            .should('have.length.greaterThan', 1)
      }) 
})

describe('Header Search - Mobile', function() 
{
    beforeEach(function () {
        cy.fixture('pioneercreditheader').then(function (data) {
          this.data = data;
        })
        cy.viewport('iphone-xr')
        cy.visit(Cypress.env('base_url'))
      })
 
      it('Search for a keyword will redirect user to Search results page and return list of related pages',function() {
          cy.clickMobileHamburgerMenu()
          cy.headerSearchMobile(this.data.header_search_keyword)
          cy.url()
            .should('include','/search/?q=')
          cy.get('.site-search__input > #searchQuery')
            .should('have.attr', 'value', this.data.header_search_keyword)
          cy.get('.site-search-results__summary > h3')
            .should('include.text','matching results for "' + this.data.header_search_keyword + '".')
          cy.get('.site-search-results__details > ul > li')
            .should('have.length.greaterThan', 1)
      }) 
})

