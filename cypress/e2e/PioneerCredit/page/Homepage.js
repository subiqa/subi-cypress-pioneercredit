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
      .find('h3 > button#accordion-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-cbb21f8a-7054-46c9-b786-104626bf4cdc')
      .should('have.text','  Why is my account now with Pioneer and not my usual credit provider?  ')
    //Not expanded by default
    homepage.getHomepageFaq()
      .find('div#accordion-panel-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-cbb21f8a-7054-46c9-b786-104626bf4cdc')
      .should('not.be.visible')
    //Accordion arrow icon is present
    homepage.getHomepageFaq()
      .find('h3 > button#accordion-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-cbb21f8a-7054-46c9-b786-104626bf4cdc > span.accordion-title > span.accordion-icon')
      .should('be.visible')
    //Click on title will display the content
    homepage.getHomepageFaq()
      .find('h3 > button#accordion-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-cbb21f8a-7054-46c9-b786-104626bf4cdc')
      .click()
    homepage.getHomepageFaq()
      .find('div#accordion-panel-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-cbb21f8a-7054-46c9-b786-104626bf4cdc')
      .should('be.visible')
      .and('have.text','Your credit provider (bank, financial institution or utility provider) has assigned your account to Pioneer due to unresolved debt. We understand things happen in life that can make it hard to keep up with repayments. We’re here to help you get back on track by offering flexible solutions that are right for you. That way, you can put an end to debt stress.')
    //Accordion item 2
    //Title text is correct
    homepage.getHomepageFaq()
      .find('h3 > button#accordion-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-a1495052-c199-482a-9737-3e05c4b60d84')
      .should('have.text','  How can I avoid Pioneer?  ')
    //Not expanded by default
    homepage.getHomepageFaq()
      .find('div#accordion-panel-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-a1495052-c199-482a-9737-3e05c4b60d84')
      .should('not.be.visible')
    //Accordion arrow icon is present
    homepage.getHomepageFaq()
      .find('h3 > button#accordion-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-a1495052-c199-482a-9737-3e05c4b60d84 > span.accordion-title > span.accordion-icon')
      .should('be.visible')
    //Click on title will display the content
    homepage.getHomepageFaq()
      .find('h3 > button#accordion-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-a1495052-c199-482a-9737-3e05c4b60d84')
      .click()
    homepage.getHomepageFaq()
      .find('div#accordion-panel-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-a1495052-c199-482a-9737-3e05c4b60d84')
      .should('be.visible')
      .and('have.text','We understand that it can feel overwhelming to be contacted by our Pioneer team, but we really mean it when we say we’re here to help. The best thing you can do is to connect with our team so that we can work with you to find the right solution. We offer multiple ways for you to get in touch with us, so you can choose the method that works best for you. You can call us, email us, set up a live chat, or self-manage your account through our customer portal. For more information, visit how we help.')
    //Accordion item 3
    //Title text is correct
    homepage.getHomepageFaq()
      .find('h3 > button#accordion-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-3aaa68a0-f35d-49ff-8873-a231acb5c11e')
      .should('have.text','  How will this affect my credit score?  ')
    //Not expanded by default
    homepage.getHomepageFaq()
      .find('div#accordion-panel-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-3aaa68a0-f35d-49ff-8873-a231acb5c11e')
      .should('not.be.visible')
    //Accordion arrow icon is present
    homepage.getHomepageFaq()
      .find('h3 > button#accordion-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-3aaa68a0-f35d-49ff-8873-a231acb5c11e > span.accordion-title > span.accordion-icon')
      .should('be.visible')
    //Click on title will display the content
    homepage.getHomepageFaq()
      .find('h3 > button#accordion-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-3aaa68a0-f35d-49ff-8873-a231acb5c11e')
      .click()
    homepage.getHomepageFaq()
      .find('div#accordion-panel-dce90db6-7b0f-48e2-a2e3-38cbd7a07ca4-3aaa68a0-f35d-49ff-8873-a231acb5c11e')
      .should('be.visible')
      //unwantend &nbsp .and('have.text','We understand having your account reassigned to Pioneer may be a confusing and stressful process. The impact to your credit file (and score) will differ depending on whether a default has previously been listed for your account. If you have a default listed by your original credit provider, this must be transferred to Pioneer.')
    //See all faq buttons is present and has correct URL
    homepage.getHomepageFaq()
      .find('div.component__core > a')  
      .should('be.visible')
      .and('have.attr', 'href', '/customer-support/faqs/')
    //Image Lift Out 2
    //Image is correct
    homepage.getHomepageBlock4()
      .find('.image-liftout--img-right > .component__core > .image-liftout__img > img')
      .invoke('attr','src')
      .should('eq','/media/tz5b0f2e/who_we_are.png')
    //H2 is correct
    homepage.getHomepageBlock4()
      .find('.image-liftout--img-right > .component__core >.image-liftout__callout > h2.image-liftout__title')
      .should('have.text','Who we are')
    //<p> is correct
    homepage.getHomepageBlock4()
      .find('.image-liftout--img-right > .component__core > .image-liftout__callout > div.image-liftout__desc')
      .should('have.text','At Pioneer, we’re driven by a strong purpose: to end debt stress for our customers. Since 2009, we’ve been dedicated to helping people with outstanding debts to transform their financial future. Discover how we can do the same for you.')  
    //Button url is correct
    homepage.getHomepageBlock4()
      .find('.image-liftout--img-right > .component__core > .image-liftout__callout > a.btn--arrow-right')
      .invoke('attr','href')
      .should('eq','/about-us/')
    //Button text is correct
    homepage.getHomepageBlock4()
      .find('.image-liftout--img-right > .component__core > .image-liftout__callout > a.btn--arrow-right')
      .should('have.text','About us')
    //Image Card
    //heading text is correct
    homepage.getHomepageBlock4()
      .find('.heading--align-center > .component__core > #867db1e0-de72-4ad8-9b55-e860328f1036')
      .should('have.text', 'Our focus is your financial freedom')
    //Card 1 
    //Image is is correct
    homepage.getHomepageBlock4()
      .find('.cards--white.cards--trio > .component__core > ul > :nth-child(1) > img.cards__img')
      .should('have.attr', 'src', '/media/ihwmxets/customer_care.png')
    //Title is correct
    homepage.getHomepageBlock4()
      .find('.cards--white.cards--trio > .component__core > ul > :nth-child(1) > div.cards__title')
      .should('have.text', 'Customer care')
    //Summary is correct
    homepage.getHomepageBlock4()
      .find('.cards--white.cards--trio > .component__core > ul > :nth-child(1) > div.cards__summary')
      .should('have.text', 'We take the time to listen, with genuine care and support you can count on.')
    //Card 2
    //Image is is correct
    homepage.getHomepageBlock4()
      .find('.cards--white.cards--trio > .component__core > ul > :nth-child(2) > img.cards__img')
      .should('have.attr', 'src', '/media/gmxhsgm1/flexible_option.png')
    //Title is correct
    homepage.getHomepageBlock4()
      .find('.cards--white.cards--trio > .component__core > ul > :nth-child(2) > div.cards__title')
      .should('have.text', 'Flexible solutions')
    //Summary is correct
    homepage.getHomepageBlock4()
      .find('.cards--white.cards--trio > .component__core > ul > :nth-child(2) > div.cards__summary')
      //unwanted &nbsp on content .should('have.text', 'We tailor our approach to help you pay back your debt in a way that suits you. ')
    //Card 3
    //Image is is correct
    homepage.getHomepageBlock4()
      .find('.cards--white.cards--trio > .component__core > ul > :nth-child(3) > img.cards__img')
      .should('have.attr', 'src', '/media/txxocsa5/transparent_honest.png')
    //Title is correct
    homepage.getHomepageBlock4()
      .find('.cards--white.cards--trio > .component__core > ul > :nth-child(3) > div.cards__title')
      .should('have.text', 'Transparent & honest')
    //Summary is correct
    homepage.getHomepageBlock4()
      .find('.cards--white.cards--trio > .component__core > ul > :nth-child(3) > div.cards__summary')
      .should('have.text', 'We do what’s right, with a dedication to uphold ethical Australian compliance standards.')
    //Image Lift Out 3
    //Image is correct
    homepage.getHomepageBlock4()
      .find('.image-liftout--img-left > .component__core > .image-liftout__img > img')
      .invoke('attr','src')
      .should('eq','/media/2hfn0sjh/helping.png')
    //H2 is correct
    homepage.getHomepageBlock4()
      .find('.image-liftout--img-left > .component__core >.image-liftout__callout > h2.image-liftout__title')
      .should('have.text','We’ve helped over 160,000 customers get back on track')
    //<p> is correct
    homepage.getHomepageBlock4()
      .find('.image-liftout--img-left > .component__core > .image-liftout__callout > div.image-liftout__desc')
      .should('have.text','Unexpected events can happen to anyone. We’re here to help you get back on your feet, supporting you with tailored solutions that are based on your needs and circumstances.')  
    //Featured CTA
    //Heading is correct
    homepage.getHomepageFeatureCTA()
      .find('.feature-cta > .component__core > .feature-cta__content > h2')
      .should('have.text', 'Community impact')
    //Summary is correct
    homepage.getHomepageFeatureCTA()
    .find('.feature-cta > .component__core > .feature-cta__content > p > :nth-child(1)')
    .should('have.text', 'We’re big believers in giving back, from championing community projects and causes, to supporting those experiencing financial stress.')
    //CTA button is correct
    homepage.getHomepageFeatureCTA()
      .find('.feature-cta > .component__core > .feature-cta__content > a')
      .should('have.text', 'Our contribution')
      .and('have.attr', 'href', '/about-us/community/')

  }  )
 
 
 
}  )