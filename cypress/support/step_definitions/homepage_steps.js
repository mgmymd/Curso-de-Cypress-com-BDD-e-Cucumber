///<reference types="cypress" />
import { Given, When} from "@badeball/cypress-cucumber-preprocessor";


Given(`I navigate to the WebdriverUniversity homepage`, () =>{
    const url = "https://www.webdriveruniversity.com/";
    cy.visit(url);
})

When(`I click on the contact us button`, ()=>{
/* Invoke pode ser usado para acessar/invocar propriedades que são funções, assim conseguimos remover
 * o atributo target que era responsável por abrir uma nova janela não rastreável pelo cypress. 
 * Com a remoção a janela passa a ser aberta na mesma página que está rodando o cypress, rastreável */

    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.get('[name="first_name"]').should("exist");
})
