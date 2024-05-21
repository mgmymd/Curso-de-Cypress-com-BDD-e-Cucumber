///<reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Loginpage_PO from "../page_objects/Loginpage_PO";

const loginPage = new Loginpage_PO();
let stub;

Given('I navigate to the WebdriverUniversity Login Portal Page', () =>{
    loginPage.navigateTo_Login_Page();
})

When('I type the correct username {string}', (username)=>{
    // cy.get('#text').type(username);
    
    // Using POM:
    loginPage.type_Username(username);
})

When('I type the correct password {string}',(password)=>{
    // cy.get('#password').type(password);

    // Using POM:
    loginPage.type_Password(password);
})

When('I click on the Login button', ()=>{
    stub = cy.stub();
    cy.on('window:alert', stub);

    // cy.get('#login-button').click();

    // Using POM:
    loginPage.clickOn_Login_Button();
})

Then('I should be presented with a pop up with a successful login message', ()=>{
    expect(stub).to.have.been.calledWith('validation succeeded');
})

Then('I should be presented with a pop up with a unsuccessful login message', ()=>{
    expect(stub).to.have.been.calledWith('validation failed');
})

When('I type an username {} and a password {}', (username, password) =>{
    // cy.get('#text').type(username);
    // cy.get('#password').type(password);

    // Using POM:
    loginPage.type_Username(username);
    loginPage.type_Password(password);
})

Then('I should be presented with a alert box with login message {string}', (message) =>{
    expect(stub).to.have.been.calledWith(message);
})
