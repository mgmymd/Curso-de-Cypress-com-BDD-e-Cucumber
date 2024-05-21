///<reference types="cypress" />
import Base_PO from "./Base_PO";

class Loginpage_PO extends Base_PO{
    navigateTo_Login_Page(){
        super.navigate("Login-Portal/index.html");
    }

    type_Username(username){
        cy.get('#text').type(username);
    }

    type_Password(password){
        cy.get('#password').type(password);
    }

    clickOn_Login_Button(){
        cy.get('#login-button').click();
    }
}

export default Loginpage_PO;
