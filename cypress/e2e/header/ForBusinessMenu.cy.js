/// <reference types="Cypress" />
import Header from '../../integration/pageObjects/Header'

describe('For Business menu - Desktop', function() 
{
    beforeEach(function () {
        cy.fixture('pioneercreditheader').then(function (data) {
          this.data = data;
        })
        cy.viewport(1512,900)
        cy.visit(Cypress.env('base_url'))
      })
 
    it('For Business menu has correct text',function() {
        const header = new Header() 
        header.getForBusinessMenu()
            .find(this.data.level1_menu_text_path)
            .should('have.text',this.data.for_business_menu_text_value) 
    })

    it('Investor Centre submenu has correct text and url', function() {
        const header = new Header() 
        header.getForBusinessMenu()
            .click()
        //Verify the URL is correct
        header.getInvestorCentreMenu()
            .find(this.data.level2_menu_a_path)
            .first()
            .should('be.visible')
            .and('have.attr', 'href',this.data.investor_centre_menu_a_path_value)
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
    })
        
    it('Our Partners submenu has correct text and url', function() {
        const header = new Header() 
        header.getForBusinessMenu()
            .click()
        //Verify the URL is correct
        header.getOurPartnersMenu()
            .find(this.data.level2_menu_a_path)
            .should('be.visible')
            .and('have.attr', 'href', this.data.our_partners_menu_a_path_value)
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
    })

    it('Corporate Governance submenu has correct text and url', function() {
        const header = new Header() 
        header.getForBusinessMenu()
            .click()
        //Verify the URL is correct
        header.getCorporateGovernanceMenu()
            .find(this.data.level2_menu_a_path)
            .should('be.visible')
            .and('have.attr', 'href', this.data.corporate_governance_menu_a_path_value)
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
    })

    it('Annual Report submenu has correct text and url', function() {
        const header = new Header() 
        header.getForBusinessMenu()
            .click()
        //Verify the title is correct
        cy.get(':nth-child(1) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__callout > .nav__callout-text > .nav__callout-title')
            .should('be.visible')
            .and('have.text', '2022 Annual Report')
        //Verify the summarry is correct
        cy.get(':nth-child(1) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__callout > .nav__callout-text > .nav__callout-desc')
            .should('have.text', 'Our 2022 Annual Report provides a detailed view of Pioneer’s business operations, achievements, financial statements and more. ')
        //Verify the CTA label and url are correct
        cy.get(':nth-child(1) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__callout > .nav__callout-text > .btn')
            .should('have.text', 'Annual Report')
            .and('have.attr', 'href', 'https://fde-pncwebsite-prod-01-hpg9akfxgzf9dugz.z01.azurefd.net/media/llll1a3n/annual-report-2021-to-2022.pdf')
    })

    it('Click and close Customer Support menu menu is working', function() {
        const header = new Header() 
        header.getForBusinessMenu()
            .click()
        cy.get('#nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac')
            .should('be.visible')
        header.getCloseIconForBusinessMenu().click()
        cy.wait(2000)
        cy.get('#nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac')
            .should('not.be.visible')
    })     
})

describe('For Business menu - Mobile', function() 
{
    beforeEach(function () {
        cy.fixture('pioneercreditheader').then(function (data) {
          this.data = data;
        })
        cy.viewport('iphone-xr')
        cy.visit(Cypress.env('base_url'))
      })
 
    it('For Business menu has correct text',function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        header.getForBusinessMenuMobile()
            .find('.js-nav-title')
            .should('be.visible')
            .and('have.text',this.data.for_business_menu_text_value)
    })

    it('Investor Centre submenu has correct text and url', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getForBusinessMenuMobile()
            .click()
        cy.wait(1000)
        //Verify the URL is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(2) > .js-nav-item')
            .scrollIntoView({ duration: 1000 })
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(2) > .js-nav-item')
            .should('be.visible')
            .and('have.attr', 'href', this.data.investor_centre_menu_a_path_value)
        //Verify the icon is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .js-sub-nav > ul > :nth-child(2) > .js-nav-item > img')
            //.find(this.data.level2_menu_a_path)
            .should('be.visible')
            .and('have.attr', 'src', this.data.investor_centre_menu_icon_path_value)
        //Verify the title is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(2) > .js-nav-item > :nth-child(2) > .nav__title')
            .should('be.visible')
            .and('have.text',this.data.investor_centre_menu_title_path_value)
        //Verify the small title is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(2) > .js-nav-item > :nth-child(2) > small')
            .should('be.visible')
            .and('have.text',this.data.investor_centre_menu_title_small_path_value)
    })
        
    it('Our Partners submenu has correct text and url', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getForBusinessMenuMobile()
            .click()
        cy.wait(1000)
        //Verify the URL is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item')
            .scrollIntoView({ duration: 1000 })
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item')
            .should('be.visible')
            .and('have.attr','href',this.data.our_partners_menu_a_path_value)
        //Verify the icon is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item > img')
            .should('be.visible')
            .and('have.attr', 'src',this.data.our_partners_menu_icon_path_value)
        //Verify the title is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item > :nth-child(2) > .nav__title')
            .should('be.visible')
            .and('have.text',this.data.our_partners_menu_title_path_value)
        //Verify the small title is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(3) > .js-nav-item > :nth-child(2) > small')
            .should('be.visible')
            .and('have.text',this.data.our_partners_menu_title_small_path_value)
    })

    it('Corporate Governance submenu has correct text and url', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getForBusinessMenuMobile()
            .click()
        cy.wait(1000)
        //Verify the URL is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item')
            .scrollIntoView({ duration: 1000 })
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item')
            .should('be.visible')
            .and('have.attr', 'href', this.data.corporate_governance_menu_a_path_value)    
        //Verify the icon is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item > img')
            .should('be.visible')
            .and('have.attr', 'src', this.data.corporate_governance_menu_icon_path_value)
        //Verify the title is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item > :nth-child(2) > .nav__title')
            .should('be.visible')
            .and('have.text',this.data.corporate_governance_menu_title_path_value)
        //Verify the small title is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav > ul > :nth-child(4) > .js-nav-item > :nth-child(2) > small')
            .should('be.visible')
            .and('have.text',this.data.corporate_governance_menu_title_small_path_value)
    })

    it('Annual Report submenu has correct text and url', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getForBusinessMenuMobile()
            .click()
        cy.wait(1000)
        //Verify the title is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__callout > .nav__callout-text > .nav__callout-title')
            .scrollIntoView({ duration: 1000 })
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__callout > .nav__callout-text > .nav__callout-title')
            .should('be.visible')
            .and('have.text', '2022 Annual Report')
        //Verify the summary is not visible
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__callout > .nav__callout-text > .nav__callout-desc')
            .should('not.be.visible')
        //Verify the CTA is correct
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__callout > .nav__callout-text > .btn')
            .should('be.visible')
            .and('have.text', 'Annual Report')
            .and('have.attr', 'href', 'https://fde-pncwebsite-prod-01-hpg9akfxgzf9dugz.z01.azurefd.net/media/llll1a3n/annual-report-2021-to-2022.pdf')
    })

    it('Click and close Customer Support menu menu is working', function() {
        const header = new Header() 
        cy.clickMobileHamburgerMenu()
        cy.wait(1000)
        header.getForBusinessMenuMobile()
            .click()
        cy.wait(1000)
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__callout')
            .should('be.visible')
        cy.get('.header .js-nav-toggle')
            .click()
        cy.wait(2000)
        cy.get(':nth-child(2) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__callout')
            .should('not.be.visible')
    })     
})