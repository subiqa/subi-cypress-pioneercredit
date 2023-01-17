class Header {

    getHeaderLogoImg(){
        return cy.get('.header .header__wrapper a[href="/"] .logo')
    }

    getHeaderLogo(){
        return cy.get('.header .header__wrapper a')
    }

    getCustomerSupportMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c')
    }

    getHowWeHelpMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav.js-sub-nav > ul > li:nth-child(1)')
    }

    getSupportHubMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav.js-sub-nav > ul > li:nth-child(2)')
    }

    getFAQMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav.js-sub-nav > ul > li:nth-child(3)')
    }

    getYourPrivacyMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .nav__sub-nav.js-sub-nav > ul > li:nth-child(4)')
    }

    getForBusinessMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac')
    }

    getInvestorCentreMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav.js-sub-nav > ul > li:nth-child(1)')
    }

    getOurPartnersMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav.js-sub-nav > ul > li:nth-child(2)')
    }

    getCorporateGovernanceMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .nav__sub-nav.js-sub-nav > ul > li:nth-child(3)')
    }

    getAboutUsMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764')
    }

    getWhoWeAreMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav.js-sub-nav > ul > li:nth-child(1)')
    }

    getOurLeadershipMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav.js-sub-nav > ul > li:nth-child(2)')
    }

    getWorkWithUsMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav.js-sub-nav > ul > li:nth-child(3)')
    }

    getCommunityMenu(){
        return cy.get('#nav > :nth-child(1) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .nav__sub-nav.js-sub-nav > ul > li:nth-child(4)')
    }

    getCloseIconCustomerSupportMenu(){
        return cy.get(':nth-child(1) > #nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c > #nav-mega-menu-95932efc-2c60-467a-8b90-909b0efdbe9c > .btn--close')
    }

    getCloseIconForBusinessMenu(){
        return cy.get(':nth-child(1) > #nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > #nav-mega-menu-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac > .btn--close')
    }

    getCloseIconAboutUsMenu(){
        return cy.get(':nth-child(1) > #nav-item-db628576-1eda-4a91-b67a-8982c7fc0764 > #nav-mega-menu-db628576-1eda-4a91-b67a-8982c7fc0764 > .btn--close')
    }

    getHeaderSearchIcon(){
        return cy.get('.js-btn-search-box')
    }

    getHeaderYourAccountButton(){
        return cy.get('#nav > .nav__quicklinks > .btn--secondary')
    }

    getHeaderYourAccountButtonMobile(){
        return cy.get('.nav-mobile > .nav__quicklinks > .btn--secondary')
    }

    getHeaderContatUsButton(){
        return cy.get('#nav > .nav__quicklinks > .btn--tertiary')
    }

    getHeaderContatUsButtonMobile(){
        return cy.get('.nav-mobile > .nav__quicklinks > .btn--tertiary')
    }

    getCustomerSupportMenuMobile(){
        return cy.get('.js-nav-mobile > ul > li#nav-item-95932efc-2c60-467a-8b90-909b0efdbe9c')
    }

    getForBusinessMenuMobile(){
        return cy.get('.js-nav-mobile > ul > li#nav-item-f0d0bf67-3cbd-479f-b1b6-c103f49f11ac')
    }

    getAboutUsMenuMobile(){
        return cy.get('.js-nav-mobile > ul > li#nav-item-db628576-1eda-4a91-b67a-8982c7fc0764')
    }
}

export default Header;