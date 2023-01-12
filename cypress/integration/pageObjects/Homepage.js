class Homepage {

    getHomepageHeroBanner(){
        return cy.get('#content > .umb-block-list > div > :nth-child(1)')
    }

    getHomepageImageLiftOut1(){
        return cy.get('#content > .umb-block-list > div > :nth-child(2)')
    }

    getHomepageFaq(){
        return cy.get('#content > .umb-block-list > div > :nth-child(3)')
    }

    getHomepageBlock4(){
        return cy.get('#content > .umb-block-list > div > :nth-child(4)')
    }

    getHomepageFeatureCTA(){
        return cy.get('#content > .umb-block-list > div > :nth-child(5)')
    }

}

export default Homepage;