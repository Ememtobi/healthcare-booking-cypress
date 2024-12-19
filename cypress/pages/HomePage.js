import {homepage} from '../fixtures/selectors'
class HomePage {
    makeAppointment(){
        //visit the website
        cy.visit(homepage.url);
        //make appointment
        cy.get(homepage.makeAppointmentButton).click();
    }
    navigateToLoginPage(){
        //visit the website
        cy.visit(homepage.url);
        //click on the menu button
        cy.get(homepage.menuButton).click();
        //click on the login button
        cy.get(homepage.loginMenu).click();
    }
}
export default HomePage;