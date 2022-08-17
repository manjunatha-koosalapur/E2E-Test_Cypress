describe('User Register', () => {
    beforeEach(() => {
        cy.visit ('https://qa-practice.netlify.app/')
        cy.get('#forms').click()
    })

    it('Register User', function(){
        // cy.visit ('https://qa-practice.netlify.app/')
        // cy.get('#forms').click()
        cy.get('#register').click()
        cy.get('#firstName').type('Manjunatha')
        cy.get('#lastName').type('K')
        cy.get('#phone').type('1234567890')
        cy.get('#countries_dropdown_menu').select('India')
        cy.get('#emailAddress').type('manjunatha@test.com')
        cy.get('#password').type('TestPassword')
        cy.get('#exampleCheck1').check().should('be.checked')
        cy.get('#registerBtn').click()
        cy.get('#message').should('contain' , 'The account has been successfully created!') 
        
        })

})