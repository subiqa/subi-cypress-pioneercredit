/// <reference types="Cypress" />
import Header from '../pageObjects/Header'

describe('Regress Main Menu - Customer Support', function() 
{
    before(function () {
        cy.fixture('pioneercreditheader').then(function (data) {
          this.data = data;
        })
      })
 
it('Regress Customer Support Menu',function() {
    const header = new Header() 
    cy.viewport(1512,900)
    //Open Application Under Test (AUT) in browser
    cy.visit(Cypress.env('base_url'))
    //Verify the 1st menu text is Customer Support
    header.getCustomerSupportMenu()
        .find(this.data.level1_menu_text_path)
        .should('have.text',this.data.customer_support_menu_text_value)
    //Click on Customer Support menu and verify it has 4 submenus
    header.getCustomerSupportMenu()
        .click()
        .find(this.data.level1_menu_list_path)
        .should('have.length', 4)
    //submenu: HOW WE HELP
    //Verify the URL is correct
    header.getHowWeHelpMenu()
        .find(this.data.level2_menu_a_path)
        .invoke('attr', 'href')
        .should('eq',this.data.how_we_help_menu_a_path_value)
    //Verify the icon is correct
    header.getHowWeHelpMenu()
        .find(this.data.level2_menu_icon_path)
        .invoke('attr', 'src')
        .should('eq',this.data.how_we_help_menu_icon_path_value)
    //Verify the title is correct
    header.getHowWeHelpMenu()
        .find(this.data.level2_menu_title_path)
        .should('have.text',this.data.how_we_help_menu_title_path_value)
    //Verify the small title is correct
    header.getHowWeHelpMenu()
        .find(this.data.level2_menu_title_small_path)
        .should('have.text',this.data.how_we_help_menu_title_small_path)
    //submenu: SUPPORT HUB
    //Verify the URL is correct
    header.getSupportHubMenu()
        .find(this.data.level2_menu_a_path)
        .invoke('attr', 'href')
        .should('eq',this.data.support_hub_menu_a_path_value)
    //Verify the icon is correct
    header.getSupportHubMenu()
        .find(this.data.level2_menu_icon_path)
        .invoke('attr', 'src')
        .should('eq',this.data.support_hub_menu_icon_path_value)
    //Verify the title is correct
    header.getSupportHubMenu()
        .find(this.data.level2_menu_title_path)
        .should('have.text',this.data.support_hub_menu_title_path_value)
    //Verify the small title is correct
    header.getSupportHubMenu()
        .find(this.data.level2_menu_title_small_path)
        .should('have.text',this.data.support_hub_menu_title_small_path)
    //submenu: FAQs
    //Verify the URL is correct
    header.getFAQMenu()
        .find(this.data.level2_menu_a_path)
        .invoke('attr', 'href')
        .should('eq',this.data.faq_menu_a_path_value)
    //Verify the icon is correct
    header.getFAQMenu()
        .find(this.data.level2_menu_icon_path)
        .invoke('attr', 'src')
        .should('eq',this.data.faq_menu_icon_path_value)
    //Verify the title is correct
    header.getFAQMenu()
        .find(this.data.level2_menu_title_path)
        .should('have.text',this.data.faq_menu_title_path_value)
    //Verify the small title is correct
    header.getFAQMenu()
        .find(this.data.level2_menu_title_small_path)
        .should('have.text',this.data.faq_menu_title_small_path)
    //submenu: YOUR PRIVACY
    //Verify the URL is correct
    header.getYourPrivacyMenu()
        .find(this.data.level2_menu_a_path)
        .invoke('attr', 'href')
        .should('eq',this.data.your_privacy_menu_a_path_value)
    //Verify the icon is correct
    header.getYourPrivacyMenu()
        .find(this.data.level2_menu_icon_path)
        .invoke('attr', 'src')
        .should('eq',this.data.your_privacy_menu_icon_path_value)
    //Verify the title is correct
    header.getYourPrivacyMenu()
        .find(this.data.level2_menu_title_path)
        .should('have.text',this.data.your_privacy_menu_title_path_value)
    //Verify the small title is correct
    header.getYourPrivacyMenu()
        .find(this.data.level2_menu_title_small_path)
        .should('have.text',this.data.your_privacy_menu_title_small_path)
    //Click on close icon will close the submenu
    header.getCloseIconCustomerSupportMenu().click()
 
//fixture
 
}  )
 
 
 
}  )