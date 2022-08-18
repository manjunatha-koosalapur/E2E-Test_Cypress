/// ＜reference types="Cypress" /＞

describe('test suite', () => {
    it('assert url', function(){
        cy.visit ('https://qa-practice.netlify.app/')
        cy.url().should('contain','netlify')
        cy.get('#dropdowns').click()

})
})