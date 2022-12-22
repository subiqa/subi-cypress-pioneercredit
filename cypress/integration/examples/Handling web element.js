/// <reference types="Cypress" />
 
describe('Automation Practice Suite', function() 
{
 
it('My FirstTest case',function() {
//set browser size
cy.viewport(1512, 900)

//Open Application Under Test (AUT) in browser
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

/*checkbox*/
//check the second checkbox and verify
cy.get("input[value='option2']").check().should('be.checked').and('have.value', 'option2')

//uncheck the second checkbox and verify with another kind of selector
cy.get('input#checkBoxOption2').uncheck().should('not.be.checked')

//handling multiple checkbox in 1 line of code
cy.get("div fieldset input[type='checkbox']").check(['option1', 'option3']).should('be.checked').and('have.value', 'option1', 'option1')


/*Dropdown*/
//Fixed Dropdown select a value
cy.get('select#dropdown-class-example').select('option2').should('have.value','option2')

//Autocomplete 
cy.get('input#autocomplete').type('ind')
cy.get('.ui-menu-item').each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    if ($el.text() === 'Indonesia') {
      // wrap this element so we can use cypress commands on it
      cy.wrap($el).click()
    } else {
      // do something else
    }
  })
  cy.get('input#autocomplete').should('have.value', 'Indonesia')

//Visible or hidden element
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')

//Radio button
cy.get("input[value='radio3']").check().should('be.checked')

 
//fixture
 
}  )
 
 
 
}  )