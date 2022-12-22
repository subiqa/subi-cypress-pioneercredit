/// <reference types="Cypress" />
 
describe('Green Cart Suite', function() 
{
 
it('My FirstTest case',function() {
//Open Application Under Test (AUT) in browser
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

//Select intended element and action typing input
cy.get('.search-keyword').type('ca')

//implicit wait until search results are displayed
cy.wait(2000)

//Set set find .product only on .products element and save it as alias
cy.get('.products').find('.product').as('productLocator')

//dynamic css locator using array
cy.get('@productLocator').each(function($el, index, $list){
    const productName = $el.find('h4.product-name').text()
    if(productName.includes('Cashews'))
    {
        cy.wrap($el).find('button').contains('ADD TO CART').click()
    }
})

//click on the cart icon
cy.get('a.cart-icon > img').click()

//click on proceed to checkout button
cy.get('button').contains('PROCEED TO CHECKOUT').click()

cy.wait(2000)

//click on place order button
cy.get('button').contains('Place Order').click()



 
 
 
 
 
 
 
 
 
 
 
//fixture
 
}  )
 
 
 
}  )