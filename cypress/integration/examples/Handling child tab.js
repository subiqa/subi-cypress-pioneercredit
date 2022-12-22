/// <reference types="Cypress" />


describe('Automation Practice Suite', function() 
{
 
it('My FirstTest case',function() {
//set browser size
cy.viewport(1512, 900)

//Open Application Under Test (AUT) in browser
cy.visit('https://www.10travlr.com.au/')

cy.get('#destinationsInputGroup > .multiselect > .multiselect__tags').type('western australia')
cy.wait(2000)
cy.get('.t-btn-accommodation > .t-btn').click()
cy.wait(6000)
cy.get('.wrap__boxItem').find('.boxItem').each(($el, index, $list) => {
  // $el is a wrapped jQuery element
  if ($el.text().includes('Super 8')) {
    cy.wrap($el)
    .find('div.boxItem__content > a')
    .invoke('removeAttr', 'target').click()
  } else {
    // do something else
  }
})
cy.wait(5000)
cy.get('.content-reserve__list').find('.content-reserve__item').each(($el, index, $list) => {
  // $el is a wrapped jQuery element
  if ($el.text() !== null) {
    cy.log()
  } else {
    // do something else
  }
})



 
//fixture
 
}  )
 
 
 
}  )