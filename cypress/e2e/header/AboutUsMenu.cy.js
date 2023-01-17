/// <reference types="Cypress" />
import Header from '../../integration/pageObjects/Header'

describe('Customer Support menu - Desktop', function() 
{
    beforeEach(function () {
        cy.fixture('pioneercreditheader').then(function (data) {
          this.data = data;
        })
        cy.viewport(1512,900)
        cy.visit(Cypress.env('base_url'))
      })
 
    it('Customer Support menu has correct text',function() {
        const header = new Header() 
        header.getCustomerSupportMenu()
            .find(this.data.level1_menu_text_path)
            .should('have.text',this.data.customer_support_menu_text_value)
    })

    it('How We Help submenu has correct text and url', function() {
        const header = new Header() 
        header.getCustomerSupportMenu()
            .click()
        //Verify the URL is correct
        header.getHowWeHelpMenu()
            .find(this.data.level2_menu_a_path)
            .should('be.visible')
            .and('have.attr', 'href',this.data.how_we_help_menu_a_path_value)
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
    })
        
    it('Support Hub submenu has correct text and url', function() {
        const header = new Header() 
        header.getCustomerSupportMenu()
            .click()
        //Verify the URL is correct
        header.getSupportHubMenu()
            .find(this.data.level2_menu_a_path)
            .should('be.visible')
            .and('have.attr', 'href', this.data.support_hub_menu_a_path_value)
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
    })

    it('FAQs submenu has correct text and url', function() {
        const header = new Header() 
        header.getCustomerSupportMenu()
            .click()
        //Verify the URL is correct
        header.getFAQMenu()
            .find(this.data.level2_menu_a_path)
            .should('be.visible')
            .and('have.attr', 'href', this.data.faq_menu_a_path_value)
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
    })

    it('Your Privacy submenu has correct text and url', function() {
        const header = new Header() 
        header.getCustomerSupportMenu()
            .click()
        //Verify the URL is correct
        header.getYourPrivacyMenu()
            .find(this.data.level2_menu_a_path)
            .should('be.visible')
            .and('have.attr', 'href', this.data.your_privacy_menu_a_path_value)
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
    })

    it('Click and close Customer Support menu menu is working', function() {
        const header = new Header() 
        header.getCustomerSupportMenu()
            .click()
        cy.get('#nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c')
            .should('be.visible')
        header.getCloseIconCustomerSupportMenu().click()
        cy.wait(2000)
        cy.get('#nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c')
            .should('not.be.visible')
    })     
})

describe('Customer Support menu - Mobile', function() 
{
    beforeEach(function () {
        cy.fixture('pioneercreditheader').then(function (data) {
          this.data = data;
        })
        cy.viewport('iphone-xr')
        cy.visit(Cypress.env('base_url'))
      })
 
    it('Customer Support menu has correct text',function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        header.getCustomerSupportMenuMobile()
            .find('.js-nav-title')
            .should('be.visible')
            .and('have.text',this.data.customer_support_menu_text_value)
    })

    it('How We Help submenu has correct text and url', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getCustomerSupportMenuMobile()
            .click()
        cy.wait(1000)
        //Verify the URL is correct
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(2) > .js-nav-item')
            .scrollIntoView({ duration: 1000 })
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(2) > .js-nav-item')
            .should('be.visible')
            .and('have.attr', 'href', this.data.how_we_help_menu_a_path_value)
        //Verify the icon is correct
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .js-sub-nav > ul > :nth-child(2) > .js-nav-item > img')
            //.find(this.data.level2_menu_a_path)
            .should('be.visible')
            .and('have.attr', 'src', this.data.how_we_help_menu_icon_path_value)
        //Verify the title is correct
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(2) > .js-nav-item > :nth-child(2) > .nav__title')
            .should('be.visible')
            .and('have.text',this.data.how_we_help_menu_title_path_value)
        //Verify the small title is correct
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(2) > .js-nav-item > :nth-child(2) > small')
            .should('be.visible')
            .and('have.text',this.data.how_we_help_menu_title_small_path)
    })
        
    it('Support Hub submenu has correct text and url', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getCustomerSupportMenuMobile()
            .click()
        cy.wait(1000)
        //Verify the URL is correct
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item')
            .scrollIntoView({ duration: 1000 })
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item')
            .should('be.visible')
            .and('have.attr','href',this.data.support_hub_menu_a_path_value)
        //Verify the icon is correct
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item > img')
            .should('be.visible')
            .and('have.attr', 'src',this.data.support_hub_menu_icon_path_value)
        //Verify the title is correct
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item > :nth-child(2) > .nav__title')
            .should('be.visible')
            .and('have.text',this.data.support_hub_menu_title_path_value)
        //Verify the small title is correct
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item > :nth-child(2) > small')
            .should('be.visible')
            .and('have.text',this.data.support_hub_menu_title_small_path)
    })

    it('FAQs submenu has correct text and url', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getCustomerSupportMenuMobile()
            .click()
        cy.wait(1000)
        //Verify the URL is correct
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item')
            .scrollIntoView({ duration: 1000 })
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item')
            .should('be.visible')
            .and('have.attr', 'href', this.data.faq_menu_a_path_value)    
        //Verify the icon is correct
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item > img')
            .should('be.visible')
            .and('have.attr', 'src', this.data.faq_menu_icon_path_value)
        //Verify the title is correct
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item > :nth-child(2) > .nav__title')
            .should('be.visible')
            .and('have.text',this.data.faq_menu_title_path_value)
        //Verify the small title is correct
        cy.get(':nth-child(2) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item > :nth-child(2) > small')
            .should('be.visible')
            .and('have.text',this.data.faq_menu_title_small_path)
    })

    it('Your Privacy submenu has correct text and url', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getCustomerSupportMenuMobile()
            .click()
        cy.wait(1000)
        //Verify the URL is correct
        cy.get('#nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(5) > .js-nav-item')
            .scrollIntoView({ duration: 1000 })
        cy.get('#nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(5) > .js-nav-item')
            .should('be.visible')
            .and('have.attr' ,'href',this.data.your_privacy_menu_a_path_value)
        //Verify the icon is correct
        cy.get('#nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(5) > .js-nav-item > img')
            .should('be.visible')
            .and('have.attr', 'src',this.data.your_privacy_menu_icon_path_value)
        //Verify the title is correct
        cy.get('#nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(5) > .js-nav-item > :nth-child(2) > .nav__title')
            .should('be.visible')
            .and('have.text',this.data.your_privacy_menu_title_path_value)
        //Verify the small title is correct
        cy.get('#nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav > ul > :nth-child(5) > .js-nav-item > :nth-child(2) > small')
            .should('be.visible')
            .and('have.text',this.data.your_privacy_menu_title_small_path)
    })

    it('Click and close Customer Support menu menu is working', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getCustomerSupportMenuMobile()
            .click()
        cy.wait(1000)
        cy.get('.nav-mobile #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c .nav__sub-nav .js-nav-item')
            .should('be.visible')
        cy.get('.header .js-nav-toggle')
            .click()
        cy.wait(2000)
        cy.get('.nav-mobile #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c .nav__sub-nav .js-nav-item')
            .should('not.be.visible')
    })     
})