/// <reference types="Cypress" />
import Header from '../../../integration/pageObjectsPioneerCredit/Header'

describe('About Us menu - Desktop', function() 
{
    beforeEach(function () {
        cy.fixture('PioneerCredit/pioneercreditheader').then(function (data) {
          this.data = data;
        })
        cy.viewport(1512,900)
        cy.visit(Cypress.env('base_url'))
      })
 
    it('About Us menu has correct text',function() {
        const header = new Header() 
        header.getAboutUsMenu()
            .find(this.data.level1_menu_text_path)
            .should('have.text',this.data.about_us_menu_text_value)
    })

    it('Who We Are submenu has correct text and url', function() {
        const header = new Header() 
        header.getAboutUsMenu()
            .click()
        //Verify the URL is correct
        header.getWhoWeAreMenu()
            .find(this.data.level2_menu_a_path)
            .should('be.visible')
            .and('have.attr', 'href',this.data.who_we_are_menu_a_path_value)
        //Verify the icon is correct
        header.getWhoWeAreMenu()
            .find(this.data.level2_menu_icon_path)
            .invoke('attr', 'src')
            .should('eq',this.data.who_we_are_menu_icon_path_value)
        //Verify the title is correct
        header.getWhoWeAreMenu()
            .find(this.data.level2_menu_title_path)
            .should('have.text',this.data.who_we_are_menu_title_path_value)
        //Verify the small title is correct
        header.getWhoWeAreMenu()
            .find(this.data.level2_menu_title_small_path)
            .should('have.text',this.data.who_we_are_menu_title_small_path_value)
    })
        
    it('Our Leadership Team submenu has correct text and url', function() {
        const header = new Header() 
        header.getAboutUsMenu()
            .click()
        //Verify the URL is correct
        header.getOurLeadershipMenu()
            .find(this.data.level2_menu_a_path)
            .should('be.visible')
            .and('have.attr', 'href', this.data.our_leadership_menu_a_path_value)
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
    })

    it('Work With Us submenu has correct text and url', function() {
        const header = new Header() 
        header.getAboutUsMenu()
            .click()
        //Verify the URL is correct
        header.getWorkWithUsMenu()
            .find(this.data.level2_menu_a_path)
            .should('be.visible')
            .and('have.attr', 'href', this.data.work_with_us_menu_a_path_value)
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
    })

    it('Community submenu has correct text and url', function() {
        const header = new Header() 
        header.getAboutUsMenu()
            .click()
        //Verify the URL is correct
        header.getCommunityMenu()
            .find(this.data.level2_menu_a_path)
            .should('be.visible')
            .and('have.attr', 'href', this.data.community_menu_a_path_value)
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
    })

    it('Click and close About Us menu menu is working', function() {
        const header = new Header() 
        header.getAboutUsMenu()
            .click()
        cy.get('#nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764')
            .should('be.visible')
        header.getCloseIconAboutUsMenu().click()
        cy.wait(2000)
        cy.get('#nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764')
            .should('not.be.visible')
    })     
})

describe('About Us menu - Mobile', function() 
{
    beforeEach(function () {
        cy.fixture('PioneerCredit/pioneercreditheader').then(function (data) {
          this.data = data;
        })
        cy.viewport('iphone-xr')
        cy.visit(Cypress.env('base_url'))
      })
 
    it('About Us menu has correct text',function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        header.getAboutUsMenuMobile()
            .find('.js-nav-title')
            .should('be.visible')
            .and('have.text',this.data.about_us_menu_text_value)
    })

    it('Who We Are submenu has correct text and url', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getAboutUsMenuMobile()
            .click()
        cy.wait(1000)
        //Verify the URL is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(2) > .js-nav-item')
            .scrollIntoView({ duration: 1000 })
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(2) > .js-nav-item')
            .should('be.visible')
            .and('have.attr', 'href', this.data.who_we_are_menu_a_path_value)
        //Verify the icon is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .js-sub-nav > ul > :nth-child(2) > .js-nav-item > img')
            //.find(this.data.level2_menu_a_path)
            .should('be.visible')
            .and('have.attr', 'src', this.data.who_we_are_menu_icon_path_value)
        //Verify the title is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(2) > .js-nav-item > :nth-child(2) > .nav__title')
            .should('be.visible')
            .and('have.text',this.data.who_we_are_menu_title_path_value)
        //Verify the small title is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(2) > .js-nav-item > :nth-child(2) > small')
            .should('be.visible')
            .and('have.text',this.data.who_we_are_menu_title_small_path_value)
    })
        
    it('Our Leadership Team submenu has correct text and url', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getAboutUsMenuMobile()
            .click()
        cy.wait(1000)
        //Verify the URL is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item')
            .scrollIntoView({ duration: 1000 })
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item')
            .should('be.visible')
            .and('have.attr','href',this.data.our_leadership_menu_a_path_value)
        //Verify the icon is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item > img')
            .should('be.visible')
            .and('have.attr', 'src',this.data.our_leadership_menu_icon_path_value)
        //Verify the title is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item > :nth-child(2) > .nav__title')
            .should('be.visible')
            .and('have.text',this.data.our_leadership_menu_title_path_value)
        //Verify the small title is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item > :nth-child(2) > small')
            .should('be.visible')
            .and('have.text',this.data.our_leadership_menu_title_small_path_value)
    })

    it('Work With Us submenu has correct text and url', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getAboutUsMenuMobile()
            .click()
        cy.wait(1000)
        //Verify the URL is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item')
            .scrollIntoView({ duration: 1000 })
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item')
            .should('be.visible')
            .and('have.attr', 'href', this.data.work_with_us_menu_a_path_value)    
        //Verify the icon is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item > img')
            .should('be.visible')
            .and('have.attr', 'src', this.data.work_with_us_menu_icon_path_value)
        //Verify the title is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item > :nth-child(2) > .nav__title')
            .should('be.visible')
            .and('have.text',this.data.work_with_us_menu_title_path_value)
        //Verify the small title is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item > :nth-child(2) > small')
            .should('be.visible')
            .and('have.text',this.data.work_with_us_menu_title_small_path_value)
    })

    it('Community submenu has correct text and url', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getAboutUsMenuMobile()
            .click()
        cy.wait(1000)
        //Verify the URL is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(5) > .js-nav-item')
            .scrollIntoView({ duration: 1000 })
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(5) > .js-nav-item')
            .should('be.visible')
            .and('have.attr' ,'href',this.data.community_menu_a_path_value)
        //Verify the icon is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(5) > .js-nav-item > img')
            .should('be.visible')
            .and('have.attr', 'src',this.data.community_menu_icon_path_value)
        //Verify the title is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(5) > .js-nav-item > :nth-child(2) > .nav__title')
            .should('be.visible')
            .and('have.text',this.data.community_menu_title_path_value)
        //Verify the small title is correct
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav > ul > :nth-child(5) > .js-nav-item > :nth-child(2) > small')
            .should('be.visible')
            .and('have.text',this.data.community_menu_title_small_path_value)
    })

    it('Click and close About Us menu menu is working', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getAboutUsMenuMobile()
            .click()
        cy.wait(1000)
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .js-sub-nav')
            .should('be.visible')
        cy.get('.header .js-nav-toggle')
            .click()
        cy.wait(2000)
        cy.get(':nth-child(2) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .js-sub-nav')
            .should('not.be.visible')
    })     
})