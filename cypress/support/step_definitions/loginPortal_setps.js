///<reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let stub;

When('I type the correct username {string}', (username)=>{
    cy.get('#text').type(username);
})

When('I type the correct password {string}',(password)=>{
    cy.get('#password').type(password);
})

When('I click on the Login button', ()=>{
    stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get('#login-button').click();
})

Then('I should be presented with a pop up with a successful login message', ()=>{
    expect(stub).to.have.been.calledWith('validation succeeded');
})

Then('I should be presented with a pop up with a unsuccessful login message', ()=>{
    expect(stub).to.have.been.calledWith('validation failed');
})

When('I type an username {} and a password {}', (username, password) =>{
    cy.get('#text').type(username);
    cy.get('#password').type(password);
})

Then('I should be presented with a alert box with login message {string}', (message) =>{
    expect(stub).to.have.been.calledWith(message);
})
