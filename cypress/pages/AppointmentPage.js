import { appointment,homepage } from "../fixtures/selectors";

class AppointmentPage {
  bookingDetails() {
    //select facility
    cy.get(appointment.facilityField)
      .select("Hongkong CURA Healthcare Center")
      // Assert that 'Hongkong CURA Healthcare Center
      .should("have.value", "Hongkong CURA Healthcare Center");
    //check for readamission
    cy.get(appointment.readmissionCheckbox).check();
    //select healthcare program
    cy.get(appointment.healthcareProgram)
      .check()
      // Assert that the Medicaid radio button is selected
      .should("be.checked");
    //type a comment
    cy.get(appointment.commentField).type("transportation required");
    //select date
    cy.get(appointment.visitDateField)
      .type("05/12/2024")
      // Assert that the inputted date is correct
      .should("have.value", "05/12/2024");
    //click on the book appointment button
    cy.get(appointment.bookAppointmentButton).click();
  }
  assertAppointmentConfirmation(){
    //assert that user is directed to appointment conformation page
    cy.get(appointment.confirmationPage).should("contain","Appointment Confirmation")
	//asssert confirmation message
    cy.get(appointment.confirmationMessage).should("contain"," your appointment has been booked")
    //verify that a user can return to the homepage after booking an appointment
    cy.get(".btn.btn-default").click()
  }
  returnToHomepage(){
    //verify that a user can return to the homepage after booking an appointment
    cy.get(appointment.returnToHomepageButton).click()
    //assert that user is on the homepage
    cy.url().should("eq",homepage.url)

  }
}
export default AppointmentPage;
