///<reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";


When('I type a first name', () =>{
     cy.get('[name="first_name"]').type('Test first name for the first test');
})

When('I type a last name', () =>{
     cy.get('[name="last_name"]').type('Test last name for the first test');
})

When('I enter an email address', () =>{
     cy.get('[name="email"]').type('fake@testemail.com');
})

When('I type a comment', () =>{
     cy.get('textarea[name="message"]')
          .type("I'm crying, I had so many errors during the setup and now I freaked out thinking that was another error instead of a deprecated for 'And'");
})

When('I click on the submit button', () =>{
     cy.get('[type="submit"]').click();
})

Then('I should be presented with a successful contact us submission message', () =>{
     cy.get('h1').should('have.text', 'Thank You for your Message!');
})

Then('I should be presented with an unsuccessful contact us submission message', () =>{
     cy.get('body').contains('Error: all fields are required');
     cy.get('body').contains('Error: Invalid email address');
})

Then(`I type a specific first name {string}`, (firstName) =>{
     cy.get('[name="first_name"]').type(firstName);
})

Then('I type a specific last name {string}', (lastName) =>{
     cy.get('[name="last_name"]').type(lastName);
})

Then('I type an email address {string}', (emailAddress) =>{
     cy.get('[name="email"]').type(emailAddress);
})

Then('I type a word {string} and number {int} within the comment input field', (comment, numberComment) =>{
     cy.get('textarea[name="message"]')
          .type(comment + " " + numberComment);
})
