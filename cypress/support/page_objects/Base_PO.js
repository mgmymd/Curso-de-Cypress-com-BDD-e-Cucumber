///<reference types="cypress" />

class Base_PO{
    // baseURL = "https://www.webdriveruniversity.com/" is not going to be used anymore

    navigate(path) {
        //cy.navigate(baseURL + path); is not going to be used anymore, we are going to use the fixtures

        cy.fixture("config.json").then((data) =>{
            cy.visit(data.baseURL + path);
        })
    }

    getPageTitle(){
        return cy.title();
    }
}

export default Base_PO;
