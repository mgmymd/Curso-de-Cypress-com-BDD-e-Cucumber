///<reference types="cypress" />
import Base_PO from "./Base_PO";

class ContactUsPage_PO extends Base_PO{
    elements = {
        comment_TextField: () => cy.get('textarea[name="message"]'),
        email_TextField: () => cy.get('[name="email"]'),
        submit_Button: () => cy.get('[type="submit"]'),
        submission_Header_Text: ()=> cy.xpath("//h1 | //body")
    }

    navigateTo_ContactUs_Page(){
        super.navigate("Contact-Us/contactus.html");
    }

    type_FirstName(firstName){
        cy.get('[name="first_name"]').type(firstName);
    }

    type_LastName(lastName){
        cy.get('[name="last_name"]').type(lastName);
    }

    type_EmailAddress(emailAddress){
        // cy.get('[name="email"]').type(emailAddress);

        // Using the Elements approach:
        this.elements.email_TextField().type(emailAddress);
    }

    type_comment(comment){
        // cy.get('textarea[name="message"]').type(comment);

        // Using the Elements approach:
        this.elements.comment_TextField().type(comment);
    }

    clickOn_Submit_Button(){
        // cy.get('[type="submit"]').click();
        this.elements.submit_Button().click();
    }

    validate_Submission_Header(expectedText){
        this.elements.submission_Header_Text().contains(expectedText);
        this.elements.submission_Header_Text().invoke("text").should('include', expectedText);
    }
}

export default ContactUsPage_PO;
