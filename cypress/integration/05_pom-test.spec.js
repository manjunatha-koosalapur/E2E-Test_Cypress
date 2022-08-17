/// ＜reference types="Cypress" /＞

import homePage from "../elements/pages/homePage"
import loginPage from "../elements/pages/loginPage"

describe('user actions', () => {
    it('login', function(){
        let HomePage = new homePage()
        let LoginPage = new loginPage()
        cy.visit ('https://qa-practice.netlify.app/')

        HomePage.getFormsSideMenu().click()
        HomePage.getLoginSideMenu().click()

        LoginPage.getEmailField().type('admin@admin.com')
        LoginPage.getPasswordField().type('admin123')
        LoginPage.getSubmitButton().click()
        LoginPage.getResponseMessage().should('have.text', 'admin@admin.com, you have successfully logged in!')


    })
});