# Cypress-Cura-Healthcare-Service 

## Description

This project is designed to automate end-to-end testing using Cypress. Cypress is a modern web testing tool that provides fast, reliable, and easy-to-write tests for web applications. This README provides instructions on how to set up, configure, and run tests using Cypress.

## Table of Contents

- [Description](#description)
- [Setup](#setup)
- [Usage](#usage)
- [Tests](#tests)
- [Project Scenario](#project-scenario)
- [Continuous Integration](#continuous-integration)
- [Reporting](#reporting)


## Setup

### Prerequisites

- Node.js and npm installed on your machine.
- The project codebase cloned to your local machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Ememtobi/cypress-cura-healthcare-service.git
    ```

2. Navigate to the project directory:

    ```bash
    cd cypress-project
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

Running Tests:

To open Cypress test runner

```bash
npx cypress open
```
To run test in headless mode

```bash
npm test
```

To run tests in different browsers

- [![chrome](https://img.shields.io/badge/CHROME-red?style=flat&logo=google%20chrome&logoColor=white)](https://www.google.com/chrome/)
[![edge](https://img.shields.io/badge/EDGE-green?style=flat&logo=microsoft%20edge&logoColor=white)](https://www.microsoft.com/edge/)
[![electron](https://img.shields.io/badge/ELECTRON-blue?style=flat&logo=electron&logoColor=white)](https://www.electronjs.org/)


```bash
npm run chrome
```
```bash
npm run edge
```
```bash
npm run electron
```

## Project Scenario
- Visit https://katalon-demo-cura.herokuapp.com/
- Verify URL
- Verify the login page
- Login with valid and invalid credentials
- Make an appointment
- Facility - Hongkong CURA Healthcare Center
- Check on "Apply for hospital readmission"
- Healthcare Program - Medicaid
- Add a comment
- Select a visiting date
- Book an Appointment
- Verify the appointment confirmation
- Verify return to homepage

## Continuous Integration
This project is configured for CI using Github Actions. Check the configuration in `.github/workflows/cypress.yml`

## Reporting
The project uses cypress-multi-reporters and mochawesome for generating test reports. The reports are stored in the cypress/reports directory.

To view the generated report, open the cypress/reports/mochareports/report.html file in your browser.
Screenshots are attached by default on test failure and are stored in the `cypress/reports/mochareports/assets` directory.
