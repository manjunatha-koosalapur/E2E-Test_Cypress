export default class homePage {
    getFormsSideMenu(){
        return cy.get('#forms')
    }

    getLoginSideMenu (){
        return cy.get('#login')

    }
}