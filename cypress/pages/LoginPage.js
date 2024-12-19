import {login} from '../fixtures/selectors'

class LoginPage {
    assertLoginPage(){
        cy.url().should('contain','login')
    }
    validUserLogin(){
        cy.get(login.usernameField).type(login.validUsername)
        cy.get(login.passwordField).type(login.validPassword)
        cy.get(login.loginButton).click()
    }
    assertValidLogin(){
        cy.url().should('contain','appointment')
    }
    invalidUserLogin(){
        cy.get(login.usernameField).type(login.invalidUsername)
        cy.get(login.passwordField).type(login.invalidPassword)
        cy.get(login.loginButton).click()
    }
    assertInvalidLogin(){
        cy.get(login.loginErrorMessage).should('contain','Login failed')
    }

}
export default LoginPage;