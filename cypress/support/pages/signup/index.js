/// <reference types="Cypress"/>

const elSignUp = require ('./elements').ELEMENTS

class signupForm {
    //tela inicial
    inputSignUpName(){
        cy.get(elSignUp.signupName).type('tstJoao')
    }

    inputSignUpEmail(){
        cy.get(elSignUp.signupEmail).type('tstJoao1@tst.com{enter}')
    }

    //Form New User fields
    signupNewUserFields(){
    cy.get(elSignUp.id_gender).click();
    cy.get(elSignUp.Password_NewUser).type('tst123')
    cy.get(elSignUp.birthDays).select('1')
    cy.get(elSignUp.birthMonth).select('12')
    cy.get(elSignUp.birthYear).select('2000')
    cy.get(elSignUp.newsletterCheck).check()
    cy.get(elSignUp.offersCheck).check()
    cy.get(elSignUp.first_name_NewUser).type('Joao')
    cy.get(elSignUp.last_name_NewUser).type('Tst')
    cy.get(elSignUp.company_NewUser).type('Company Tst')
    cy.get(elSignUp.address1_NewUser).type('Rua Address Tst 01')
    cy.get(elSignUp.address2_NewUser).type('Rua Address Tst 02')
    cy.get(elSignUp.country_NewUser).select('Canada')
    cy.get(elSignUp.state_NewUser).type('State Tst')
    cy.get(elSignUp.city_NewUser).type('City Tst')
    cy.get(elSignUp.zipcode_NewUser).type('14888111')
    cy.get(elSignUp.mobile_number_NewUser).type('7755551111')
    //cy.get(elSignUp.create_account_Btn).click();
}

}
export default new signupForm
