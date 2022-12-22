/// <reference types="Cypress" />
import Header from '../pageObjects/Header'

describe('Regress Main Menu - About Us', function() 
{
    before(function () {
        cy.fixture('pioneercreditheader').then(function (data) {
          this.data = data;
        })
      })
 
it('Regress About Us Menu',function() {
    const header = new Header() 
    cy.viewport(1512,900)
    //Open Application Under Test (AUT) in browser
    cy.visit(Cypress.env('base_url'))
    //Verify the 1st menu text is Customer Support
    header.getAboutUsMenu()
        .find(this.data.level1_menu_text_path)
        .should('have.text',this.data.about_us_menu_text_value)
    //Click on Customer Support menu and verify it has 4 submenus
    header.getAboutUsMenu()
        .click()
        .find(this.data.level1_menu_list_path)
        .should('have.length', 4)
    //submenu: Who We Are
    //Verify the URL is correct
    header.getWhoWeAreMenu()
        .find(this.data.level2_menu_a_path)
        .invoke('attr', 'href')
        .should('eq',this.data.who_we_are_menu_a_path_value)
    //Verify the icon is correct
    header.getWhoWeAreMenu()
        .find(this.data.level2_menu_icon_path)
        .invoke('attr', 'src')
        .should('eq',this.data.who_we_are_menu_icon_path_value)
    //Verify the title is correct
    header.getWhoWeAreMenu()
        .find(this.data.level2_menu_title_path)
        .should('have.text',this.data.who_we_are__menu_title_path_value)
    //Verify the small title is correct
    header.getWhoWeAreMenu()
        .find(this.data.level2_menu_title_small_path)
        .should('have.text',this.data.who_we_are_menu_title_small_path_value)
    //submenu: OUR LEADERSHIP
    //Verify the URL is correct
    header.getOurLeadershipMenu()
        .find(this.data.level2_menu_a_path)
        .invoke('attr', 'href')
        .should('eq',this.data.our_leadership_menu_a_path_value)
    //Verify the icon is correct
    header.getOurLeadershipMenu()
        .find(this.data.level2_menu_icon_path)
        .invoke('attr', 'src')
        .should('eq',this.data.our_leadership_menu_icon_path_value)
    //Verify the title is correct
    header.getOurLeadershipMenu()
        .find(this.data.level2_menu_title_path)
        .should('have.text',this.data.our_leadership_menu_title_path_value)
    //Verify the small title is correct
    header.getOurLeadershipMenu()
        .find(this.data.level2_menu_title_small_path)
        .should('have.text',this.data.our_leadership_menu_title_small_path_value)
    //submenu: WORK WITH US
    //Verify the URL is correct
    header.getWorkWithUsMenu()
        .find(this.data.level2_menu_a_path)
        .invoke('attr', 'href')
        .should('eq',this.data.work_with_us_menu_a_path_value)
    //Verify the icon is correct
    header.getWorkWithUsMenu()
        .find(this.data.level2_menu_icon_path)
        .invoke('attr', 'src')
        .should('eq',this.data.work_with_us_menu_icon_path_value)
    //Verify the title is correct
    header.getWorkWithUsMenu()
        .find(this.data.level2_menu_title_path)
        .should('have.text',this.data.work_with_us_menu_title_path_value)
    //Verify the small title is correct
    header.getWorkWithUsMenu()
        .find(this.data.level2_menu_title_small_path)
        .should('have.text',this.data.work_with_us_menu_title_small_path_value)
    //submenu: COMMUNITY
    //Verify the URL is correct
    header.getCommunityMenu()
        .find(this.data.level2_menu_a_path)
        .invoke('attr', 'href')
        .should('eq',this.data.community_menu_a_path_value)
    //Verify the icon is correct
    header.getCommunityMenu()
        .find(this.data.level2_menu_icon_path)
        .invoke('attr', 'src')
        .should('eq',this.data.community_menu_icon_path_value)
    //Verify the title is correct
    header.getCommunityMenu()
        .find(this.data.level2_menu_title_path)
        .should('have.text',this.data.community_menu_title_path_value)
    //Verify the small title is correct
    header.getCommunityMenu()
        .find(this.data.level2_menu_title_small_path)
        .should('have.text',this.data.community_menu_title_small_path_value)
    //Click on close icon will close the submenu
    header.getCloseIconAboutUsMenu().click()
 
//fixture
 
}  )
 
 
 
}  )