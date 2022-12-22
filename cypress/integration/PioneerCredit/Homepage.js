/// <reference types="Cypress" />
import Homepage from '../pageObjects/Homepage'

describe('Regress Homepage', function() 
{
    before(function () {
        cy.fixture('pioneercredithomepage').then(function (data) {
          this.data = data;
        })
      })
 
it('Homepage',function() {
    const homepage = new Homepage()
    cy.viewport(1512,900)
    //Open Application Under Test (AUT) in browser
    cy.visit(Cypress.env('base_url'))
    //Hero banner
    //Verify the image is correct
    homepage.getHomepageHeroBanner()
      .find(this.data.hero_banner_img_path)
      .invoke('attr','src')
      .should('eq',this.data.hero_banner_img_path_value)
    //Verify the text is correct
    homepage.getHomepageHeroBanner()
      .find(this.data.hero_banner_h1_path)
      .should('have.text',this.data.hero_banner_h1_text)
    //Verify the icon is correct
    homepage.getHomepageHeroBanner()
      .find(this.data.hero_banner_icon_path)
      .should('be.visible')
    //Image Lift Out 1
    //Image is correct
    homepage.getHomepageImageLiftOut1()
      .find('.image-liftout__img > img')
      .invoke('attr','src')
      .should('eq','/media/gttbq5em/unexpected_letter.png')
    //H2 is correct
    homepage.getHomepageImageLiftOut1()
      .find('.image-liftout__callout > h2.image-liftout__title')
      .should('have.text','Received an unexpected notice from us?')
    //<p> is correct
    homepage.getHomepageImageLiftOut1()
      .find('.image-liftout__callout > div.image-liftout__desc')
      .should('have.text','Sometimes things happen in life that can make it hard to keep up with repayments. When this happens, your credit provider may sell your account to Pioneer so that a solution can be reached.If you receive a letter, email, or SMS from us, it means we’re here to help you. We understand everyone’s situation is different, so we’ll work with you to find the right solution. That way, you can get back to enjoying financial freedom sooner.')  
    //Button url is correct
    homepage.getHomepageImageLiftOut1()
      .find('.image-liftout__callout > a.btn--arrow-right')
      .invoke('attr','href')
      .should('eq','/customer-support/how-we-help/#7a3a1c71-6f47-4ab1-b119-788cc8149ae5')
    //Button text is correct
    homepage.getHomepageImageLiftOut1()
      .find('.image-liftout__callout > a.btn--arrow-right')
      .should('have.text','Understand your options')
    //FAQ
    //H2 text is correct
    homepage.getHomepageFaq()
      .find('h2#78709c23-63e0-4272-940c-b8c943c808d4')
      .should('have.text','Your questions answered')
    //Bruss line image is displayed and correct
    homepage.getHomepageFaq()
      .find('h2#78709c23-63e0-4272-940c-b8c943c808d4 + .heading__accent > img')
      .should('be.visible')
    homepage.getHomepageFaq()
      .find('h2#78709c23-63e0-4272-940c-b8c943c808d4 + .heading__accent > img')
      .invoke('attr','src')
      .should('eq','/dist/assets/line-curved-03.png')
    //Accordion item 1 
    //Title text is correct
    homepage.getHomepageFaq()
      .find('h3#accordion-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-cbb21f8a-7054-46c9-b786-104626bf4cdc')
      .should('have.text','')
    //Not expanded by default
    homepage.getHomepageFaq()
      .find('div#accordion-panel-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-cbb21f8a-7054-46c9-b786-104626bf4cdc')
      .should('not.be.visible')
    //Click on title will display the content
    homepage.getHomepageFaq()
      .find('h3#accordion-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-cbb21f8a-7054-46c9-b786-104626bf4cdc')
      .click()
    homepage.getHomepageFaq()
      .find('div#accordion-panel-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-cbb21f8a-7054-46c9-b786-104626bf4cdc')
      .should('be.visible')
      .and('have.text','Your credit provider (bank, financial institution or utility provider) has assigned your account to Pioneer due to unresolved debt. We understand things happen in life that can make it hard to keep up with repayments. We’re here to help you get back on track by offering flexible solutions that are right for you. That way, you can put an end to debt stress.')

    //Image Lift Out 2

    //Image Card

    //Image Lift Out 3

    //Featured CTA

    //fixture
 
}  )
 
 
 
}  )