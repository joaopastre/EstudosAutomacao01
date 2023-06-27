import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import signupForm from "../pages/signup";

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("access the login page", () => {
    cy.visit("https://automationexercise.com/login");
})

When("input name and email", () => {
    signupForm.inputSignUpName()
    signupForm.inputSignUpEmail()
})

Then("fill the new user form", () => {
    signupForm.signupNewUserFields()
})