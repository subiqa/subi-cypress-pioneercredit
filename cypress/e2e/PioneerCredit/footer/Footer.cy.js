/// <reference types="Cypress" />
import Footer from '../../../integration/pageObjectsPioneerCredit/Footer';
describe('Footer - Desktop', function() 
{
    beforeEach(function () {
        cy.fixture('PioneerCredit/pioneercreditfooter').then(function (data) {
          this.data = data;
        })
        cy.viewport(1512,900)
        cy.visit(Cypress.env('base_url'))
      })
 
    it('Footer Logo has correct url',function() {
        const footer = new Footer()
        footer.getFooterLogo()
            .should('be.visible')
            .and('have.attr', 'href', '/')
    })

    it('Footer Logo has correct img',function() {
      const footer = new Footer()
      footer.getFooterLogo()
      .find('img')
          .should('be.visible')
          .and('have.attr', 'src', '/dist/assets/logo-pioneer-white.svg')
    })

    it('Footer Feedback link has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterFeedbackLink()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_feedback_link_url)
          .and('have.text', this.data.footer_feedback_link_text)
    })

    it('Footer Your Privacy link has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterPrivacyLink()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_privacy_link_url)
          .and('have.text', this.data.footer_privacy_link_text)
    })

    it('Footer Corporate Directory link has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterCorporateLink()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_corporate_link_url)
          .and('have.text', this.data.footer_corporate_link_text)
    })

    it('Footer Share Registry link has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterShareRegistryLink()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_registry_link_url)
          .and('have.text', this.data.footer_registry_link_text)
    })

    it('Footer Accessibility link has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterAccessibilityLink()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_accessibility_link_url)
          .and('have.text', this.data.footer_accessibility_link_text)
    })

    it('Footer Contact Us button has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterContactUs()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_contact_us_link_url)
          .and('have.text', this.data.footer_contact_us_link_text)
    })

    it('Footer LinkedIn button has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterLinkedIn()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_linkedin_link_url)
          .and('have.text', this.data.footer_linkedin_link_text)
    })

    it('Footer Copyrigths has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterCopyrights()
          .should('be.visible')
          .and('have.text',this.data.footer_copyrights_text)
    })
})

describe('Footer - Mobile', function() 
{
    beforeEach(function () {
        cy.fixture('PioneerCredit/pioneercreditfooter').then(function (data) {
          this.data = data;
        })
        cy.viewport('iphone-xr')
        cy.visit(Cypress.env('base_url'))
      })
 
    it('Footer Logo has correct url',function() {
        const footer = new Footer()
        footer.getFooterLogo()
            .should('be.visible')
            .and('have.attr', 'href', '/')
    })

    it('Footer Logo has correct img',function() {
      const footer = new Footer()
      footer.getFooterLogo()
      .find('img')
          .should('be.visible')
          .and('have.attr', 'src', '/dist/assets/logo-pioneer-white.svg')
    })

    it('Footer Feedback link has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterFeedbackLink()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_feedback_link_url)
          .and('have.text', this.data.footer_feedback_link_text)
    })

    it('Footer Your Privacy link has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterPrivacyLink()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_privacy_link_url)
          .and('have.text', this.data.footer_privacy_link_text)
    })

    it('Footer Corporate Directory link has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterCorporateLink()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_corporate_link_url)
          .and('have.text', this.data.footer_corporate_link_text)
    })

    it('Footer Share Registry link has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterShareRegistryLink()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_registry_link_url)
          .and('have.text', this.data.footer_registry_link_text)
    })

    it('Footer Accessibility link has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterAccessibilityLink()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_accessibility_link_url)
          .and('have.text', this.data.footer_accessibility_link_text)
    })

    it('Footer Contact Us button has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterContactUs()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_contact_us_link_url)
          .and('have.text', this.data.footer_contact_us_link_text)
    })

    it('Footer LinkedIn button has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterLinkedIn()
          .should('be.visible')
          .and('have.attr', 'href', this.data.footer_linkedin_link_url)
          .and('have.text', this.data.footer_linkedin_link_text)
    })

    it('Footer Copyrigths has correct text and url',function() {
      const footer = new Footer()
      footer.getFooterCopyrights()
          .should('be.visible')
          .and('have.text',this.data.footer_copyrights_text)
    })
})