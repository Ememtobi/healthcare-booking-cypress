const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Login',()=>{
    beforeEach('visit website',()=>{
        homePage.navigateToLoginPage();
        //assert user is on the loginPage
        loginPage.assertLoginPage();
    })

    it('Login with valid credentials',()=>{
        //enter valid credentials
        loginPage.validUserLogin();
        //assert that login is successful and user is directed to the make appointment page
        loginPage.assertValidLogin();
    })
    it('Login with invalid credentials',()=>{
        //enter invalid credentials
        loginPage.invalidUserLogin();
        //assert error message
        loginPage.assertInvalidLogin();
    })
})