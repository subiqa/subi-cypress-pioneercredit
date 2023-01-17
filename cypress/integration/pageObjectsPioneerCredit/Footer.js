class Footer {

    getFooterLogo(){
        return cy.get('.footer__block-container > :nth-child(1) > a')
    }

    getFooterFeedbackLink(){
        return cy.get('.footer__block-container > :nth-child(2) > ul > :nth-child(1) > a')
    }

    getFooterPrivacyLink(){
        return cy.get('.footer__block-container > :nth-child(2) > ul > :nth-child(2) > a')
    }

    getFooterCorporateLink(){
        return cy.get('.footer__block-container > :nth-child(2) > ul > :nth-child(3) > a')
    }

    getFooterShareRegistryLink(){
        return cy.get('.footer__block-container > :nth-child(2) > ul > :nth-child(4) > a')
    }

    getFooterAccessibilityLink(){
        return cy.get('.footer__block-container > :nth-child(2) > ul > :nth-child(5) > a')
    }

    getFooterContactUs(){
        return cy.get('.footer__block-container > :nth-child(3) > .footer__call-to-action-container > :nth-child(1)')
    }

    getFooterLinkedIn(){
        return cy.get('.footer__block-container > :nth-child(3) > .footer__call-to-action-container > :nth-child(2)')
    }

    getFooterCopyrights(){
        return cy.get('.footer__block-container > :nth-child(3) > .footer__byline')
    }

}

export default Footer;