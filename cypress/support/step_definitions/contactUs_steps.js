///<reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactUsPage_PO from "../page_objects/ContactUsPage_PO";

const contactUs = new ContactUsPage_PO();

When('I type a first name', () =>{
     // cy.get('[name="first_name"]').type('Test first name for the first test');
     // Using POM:
     contactUs.type_FirstName("Teste de Primeiro Nome");
})

When('I type a last name', () =>{
     // cy.get('[name="last_name"]').type('Test last name for the first test');
     // Using POM:
     contactUs.type_LastName("Test last name for the first test");
})

When('I enter an email address', () =>{
     // cy.get('[name="email"]').type('fake@testemail.com');
     contactUs.type_EmailAddress("fake@testemail.com");
})

When('I type a comment', () =>{
     //cy.get('textarea[name="message"]').type("I'm crying, I had so many errors during the setup and now I freaked out thinking that was another error instead of a deprecated for 'And'");
     contactUs.type_comment("Hello world!");
})

When('I click on the submit button', () =>{
     // cy.get('[type="submit"]').click();
     //Using POM:
     contactUs.clickOn_Submit_Button();
})

Then('I should be presented with a successful contact us submission message', () =>{
    // cy.get('h1').should('have.text', 'Thank You for your Message!');
    // Using POM:
    contactUs.validate_Submission_Header("Thank You for your Message!");
})

Then('I should be presented with an unsuccessful contact us submission message', () =>{
     //cy.get('body').contains('Error: all fields are required');
     //cy.get('body').contains('Error: Invalid email address');
     contactUs.validate_Submission_Header("Error: all fields are required");
     contactUs.validate_Submission_Header("Error: Invalid email address");
})

Then(`I type a specific first name {string}`, (firstName) =>{
     //cy.get('[name="first_name"]').type(firstName);
     // Using POM:
     contactUs.type_FirstName(firstName);
})

Then('I type a specific last name {string}', (lastName) =>{
     //cy.get('[name="last_name"]').type(lastName);
     contactUs.type_LastName(lastName);
})

Then('I type an email address {string}', (emailAddress) =>{
     //cy.get('[name="email"]').type(emailAddress);
     contactUs.type_EmailAddress(emailAddress);
})

Then('I type a word {string} and number {int} within the comment input field', (comment, numberComment) =>{
     //cy.get('textarea[name="message"]').type(comment + " " + numberComment);
     contactUs.type_comment(comment + " " + numberComment);
})

When('I type a first name {word} and a last name {string}', (firstName, lastName) => {
    // cy.get('[name="first_name"]').type(firstName);
    // cy.get('[name="last_name"]').type(lastName);

    // Using POM:
    contactUs.type_FirstName(firstName);
    contactUs.type_LastName(lastName);
})

When('I type a {string} and a comment {string}', (emailAddress, comment) => {
     // cy.get('[name="email"]').type(emailAddress);
    // cy.get('textarea[name="message"]').type(comment);

    //Using POM:
    contactUs.type_EmailAddress(emailAddress);
    contactUs.type_comment(comment);
})

Then('I should be presented with a header text {string}', (message) =>{
     // cy.xpath("//h1 | //body").contains(message);

     // Using POM:
     contactUs.validate_Submission_Header(message);
})
