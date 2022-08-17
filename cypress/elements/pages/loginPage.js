export default class loginPage {
    getEmailField(){
        return cy.get('#email')
    }
    getPasswordField (){
        return cy.get('#password')
    }
    getSubmitButton (){
        return cy.get('#submitLoginBtn')
    }
    getResponseMessage (){
        return cy.get('#message').should('contain', 'admin@admin.com, you have successfully logged in!')
    }

}