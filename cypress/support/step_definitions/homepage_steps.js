///<reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";


Given(`I navigate to the WebdriverUniversity homepage`, () =>{
    const url = "https://www.webdriveruniversity.com/";
    cy.visit(url);
})

When(`I click on the contact us button`, ()=>{
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.get('[name="first_name"]').should("exist")
})
