/// ＜reference types="Cypress" /＞

describe('UserLogin test suite', () => {
    
    beforeEach(() => {
        cy.visit ('https://qa-practice.netlify.app/')
        cy.get('#forms').click()
    })

        it('UserLogin test', function(){
            // cy.visit ('https://qa-practice.netlify.app/')
            // cy.get('#forms').click()
            cy.get('#login').click();
            cy.get('#email').type('admin@admin.com')
            cy.get('#password').type('admin123')
            cy.get('#submitLoginBtn').click()
            cy.get('#message').should('contain', 'you have successfully logged in!')


        })

})