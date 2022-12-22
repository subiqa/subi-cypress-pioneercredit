/// <reference types="Cypress" />
import Footer from '../pageObjects/Footer'

describe('Regress Footer Links', function() 
{
    before(function () {
        cy.fixture('pioneercreditfooter').then(function (data) {
          this.data = data;
        })
      })
 
it('Footer Links',function() {
    const footer = new Footer()
    cy.viewport(1512,900)
    //Open Application Under Test (AUT) in browser
    cy.visit(Cypress.env('base_url'))
    //Feedback link
    //Verify URL
    footer.getFooterFeedbackLink()
      .invoke('attr','href')
      .should('eq',this.data.footer_feedback_link_url)
    //Verify text
    footer.getFooterFeedbackLink()
      .should('have.text',this.data.footer_feedback_link_text)
    //Your Privacy link
    //Verify URL
    footer.getFooterPrivacyLink()
    .invoke('attr','href')
    .should('eq',this.data.footer_privacy_link_url)
    //Verify text
    footer.getFooterPrivacyLink()
      .should('have.text',this.data.footer_privacy_link_text)
    //Corporate Directory link
    //Verify URL
    footer.getFooterCorporateLink()
    .invoke('attr','href')
    .should('eq',this.data.footer_corporate_link_url)
    //Verify text
    footer.getFooterCorporateLink()
      .should('have.text',this.data.footer_corporate_link_text)
    //Share Registry link
    //Verify URL
    footer.getFooterShareRegistryLink()
    .invoke('attr','href')
    .should('eq',this.data.footer_registry_link_url)
    //Verify text
    footer.getFooterShareRegistryLink()
      .should('have.text',this.data.footer_registry_link_text)
    //Accessiility link
    //Verify URL
    footer.getFooterAccessibilityLink()
    .invoke('attr','href')
    .should('eq',this.data.footer_accessibility_link_url)
    //Verify text
    footer.getFooterAccessibilityLink()
      .should('have.text',this.data.footer_accessibility_link_text)

//fixture
 
}  )
 
 
 
}  )