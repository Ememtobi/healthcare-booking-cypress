const AppointmentPage = require ('../pages/AppointmentPage');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage')

const appointmentPage = new AppointmentPage();
const loginPage = new LoginPage();
const homePage = new HomePage();

describe('appointment booking',()=>{
    before('login',()=>{
        //visit the website to make appointment
        homePage.makeAppointment();
        //login to the website
        loginPage.validUserLogin();
    })

    it('make an appointment',()=>{
        //fill appointment details
        appointmentPage.bookingDetails();
        //confirm appointment
        appointmentPage.assertAppointmentConfirmation();
        //verify that user can return to the homepage after making an appointment
        appointmentPage.returnToHomepage();
    })  
})
