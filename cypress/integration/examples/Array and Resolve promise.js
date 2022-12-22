/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
//Open Application Under Test (AUT) in browser
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
//Select intended element and action typing input
cy.get('.search-keyword').type('ca')
//implicit wait
cy.wait(2000)
//Assert have lenght 
cy.get('.product').should('have.length',5)
//Ensure only get .product that visible on website and assert
cy.get('.product:visible').should('have.length',4)
//Parent child chaining
//Set repeated element locator as alias
cy.get('.products').as('productLocator')
//set find .product only on .products element  
cy.get('@productLocator').find('.product').should('have.length',4)
//static css locator
cy.get(':nth-child(3) > .product-action > button').click()
//statis css locator + handle promise print in browser console log
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
{
    console.log('sf')
})
//dynamic css locator using array
cy.get('@productLocator').find('.product').each(($el, index, $list) => {
 
const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
$el.find('button').click()
}
})
 
//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')
 
//this is to print in cypress logs
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
    //const logo=cy.get('.brand')
    //cy.log(cy.get('.brand').text())
    // cy.log(logo.text())
 
})

 
 
 
 
 
 
 
 
 
 
 
//fixture
 
}  )
 
 
 
}  )