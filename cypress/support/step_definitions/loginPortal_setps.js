///<reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I type the correct username {string}', (username)=>{
    cy.get('#text').type(username);
})

When('I type the correct password {string}',(password)=>{
    cy.get('#password').type(password);
})

When('I click on the Login button', ()=>{
    cy.get('#login-button').click()
})

Then('I should be presented with a pop up with a successful login message', ()=>{
    // const stub = cy.stub().as('loginMessage')
    // cy.on('window:alert', stub).then(() =>{
    //     expect(stub.getCall(0)).to.be.calledWith('validation succeeded')
    // })
})

Then('I should be presented with a pop up with a unsuccessful login message', ()=>{

})

When('I type an username {string} and a password {string}', (username, password) =>{
    cy.get('#text').type(username);
    cy.get('#password').type(password);
})

Then('I should be presented with a pop up with login message {string}', (message) =>{

})
