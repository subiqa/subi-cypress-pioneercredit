/// <reference types="Cypress" />
import Header from '../pageObjects/Header'

describe('Regress Main Menu - For Business', function() 
{
    before(function () {
        cy.fixture('pioneercreditheader').then(function (data) {
          this.data = data;
        })
      })
 
it('For Business Menu',function() {
    const header = new Header()
    cy.viewport(1512,900)
    //Open Application Under Test (AUT) in browser
    cy.visit(Cypress.env('base_url'))
    //Verify the 2nd menu text is Customer Support
    header.getForBusinessMenu()
        .find(this.data.level1_menu_text_path)
        .should('have.text',this.data.for_business_menu_text_value)
    //Click on Customer Support menu
    header.getForBusinessMenu()
        .click()
        //Assert left column has 3 items
        .find(this.data.level1_menu_left_list_path)
        .should('have.length', 3)
    //Assert right column has 1 items
    header.getForBusinessMenu()
        .find(this.data.level1_menu_right_list_path)
        .should('have.length', 1)
    //submenu: INVESTOR CENTRE
    //Verify the URL is correct
    header.getInvestorCentreMenu()
        .find(this.data.level2_menu_a_path)
        .invoke('attr', 'href')
        .should('eq',this.data.investor_centre_menu_a_path_value)
    //Verify the icon is correct
    header.getInvestorCentreMenu()
        .find(this.data.level2_menu_icon_path)
        .invoke('attr', 'src')
        .should('eq',this.data.investor_centre_menu_icon_path_value)
    //Verify the title is correct
    header.getInvestorCentreMenu()
        .find(this.data.level2_menu_title_path)
        .should('have.text',this.data.investor_centre_menu_title_path_value)
    //Verify the small title is correct
    header.getInvestorCentreMenu()
        .find(this.data.level2_menu_title_small_path)
        .should('have.text',this.data.investor_centre_menu_title_small_path_value)
    //submenu: Our Business Model
    //Verify the URL is correct
    header.getInvestorCentreMenu()
        .find(this.data.level3_our_business_model_path)
        .invoke('attr', 'href')
        .should('eq',this.data.level3_our_business_model_path_value)
    //Verify the title is correct
    header.getInvestorCentreMenu()
        .find(this.data.level3_our_business_model_path)
        .should('have.text',this.data.level3_our_business_model_title_value)
    //submenu: News
    //Verify the URL is correct
    header.getInvestorCentreMenu()
        .find(this.data.level3_news_path)
        .invoke('attr', 'href')
        .should('eq',this.data.level3_news_path_value)
    //Verify the title is correct
    header.getInvestorCentreMenu()
        .find(this.data.level3_news_path)
        .should('have.text',this.data.level3_news_title_value)
    //submenu: OUR PARTNERS
    //Verify the URL is correct
    header.getOurPartnersMenu()
        .find(this.data.level2_menu_a_path)
        .invoke('attr', 'href')
        .should('eq',this.data.our_partners_menu_a_path_value)
    //Verify the icon is correct
    header.getOurPartnersMenu()
        .find(this.data.level2_menu_icon_path)
        .invoke('attr', 'src')
        .should('eq',this.data.our_partners_menu_icon_path_value)
    //Verify the title is correct
    header.getOurPartnersMenu()
        .find(this.data.level2_menu_title_path)
        .should('have.text',this.data.our_partners_menu_title_path_value)
    //Verify the small title is correct
    header.getOurPartnersMenu()
        .find(this.data.level2_menu_title_small_path)
        .should('have.text',this.data.our_partners_menu_title_small_path_value)
    //submenu: CORPORATE GOVERNANCE
    //Verify the URL is correct
    header.getCorporateGovernanceMenu()
        .find(this.data.level2_menu_a_path)
        .invoke('attr', 'href')
        .should('eq',this.data.corporate_governance_menu_a_path_value)
    //Verify the icon is correct
    header.getCorporateGovernanceMenu()
        .find(this.data.level2_menu_icon_path)
        .invoke('attr', 'src')
        .should('eq',this.data.corporate_governance_menu_icon_path_value)
    //Verify the title is correct
    header.getCorporateGovernanceMenu()
        .find(this.data.level2_menu_title_path)
        .should('have.text',this.data.corporate_governance_menu_title_path_value)
    //Verify the small title is correct
    header.getCorporateGovernanceMenu()
        .find(this.data.level2_menu_title_small_path)
        .should('have.text',this.data.corporate_governance_menu_title_small_path_value)
    //CLick on close icon will close the submenu
    header.getCloseIconForBusinessMenu().click()
    
//fixture
 
}  )
 
 
 
}  )