///<reference types="cypress" />
import { Given, When, Before} from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/Base_PO";
import Homepage_PO from "../page_objects/Homepage_PO";

const basePage = new Base_PO();
const homePage = new Homepage_PO();

Before(() =>{
    cy.log("Executing commands inside the Homepage steps");
})

Given(`I navigate to the WebdriverUniversity homepage`, () =>{
    // const url = "https://www.webdriveruniversity.com/";
    // cy.visit(url);

    // basePage.navigate(""); We are not going to use it directly anymore here
    homePage.navigate("");
    basePage.getPageTitle();
})

When(`I click on the contact us button`, ()=>{
/* Invoke pode ser usado para acessar/invocar propriedades que são funções, assim conseguimos remover
 * o atributo target que era responsável por abrir uma nova janela não rastreável pelo cypress. 
 * Com a remoção a janela passa a ser aberta na mesma página que está rodando o cypress, rastreável */

    //cy.get("#contact-us").invoke("removeAttr", "target").click();

    // cy.clickAndOpenLink_InSameTab("#contact-us"); We are not going to use anymore this customized method here

    // Using POM:
    homePage.clickOn_ContactUs_Button();

    // To validate that we arrived at the correct page
    cy.get('[name="first_name"]').should("exist");
})

When(`I click on the Login Portal button`, () =>{
    //cy.get("#login-portal").invoke("removeAttr", "target").click();

    //cy.clickAndOpenLink_InSameTab("#login-portal"); We are not going to use anymore this customized method here

    // Using POM:
    homePage.clickOn_LoginPortal_Button();

    // To validate that we arrived at the correct page
    cy.get('.bg-bubbles').should('be.visible');
})

When(`I click on the to do list button`, () =>{
    cy.clickAndOpenLink_InSameTab("#to-do-list");
})
