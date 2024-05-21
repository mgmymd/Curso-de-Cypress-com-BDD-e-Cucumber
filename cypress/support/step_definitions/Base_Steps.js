///<reference types="cypress" />
import { When, Then, Before, After} from "@badeball/cypress-cucumber-preprocessor";

    Before(() =>{
        cy.log("Executes before all scenarios! is the same as Cypress cy.beforeEach().");
        cy.clearLocalStorage();
    })

    Before({tags: "@smoke"}, () =>{
        cy.log("Executing Smoke Pack!");
    })

    After(() =>{
        cy.log("Executes after each Scenario! Is the same as Cypress cy.afterEach().");
    })

When("I wait for {int} seconds", (seconds) =>{
    cy.wait(seconds * 1000 );
})
