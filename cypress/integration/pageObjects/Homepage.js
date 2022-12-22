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

    getHomepageImageLiftOut2(){
        return cy.get('#content > .umb-block-list > div > :nth-child(4)')
    }

    getHomepageImageCard(){
        return cy.get('#content > .umb-block-list > div > :nth-child(5)')
    }

    getHomepageImageLiftOut3(){
        return cy.get('#content > .umb-block-list > div > :nth-child(6)')
    }

    getHomepageFeatureCTA(){
        return cy.get('#content > .umb-block-list > div > :nth-child(7)')
    }

}

export default Homepage;