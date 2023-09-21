import { Given, When } from "@badeball/cypress-cucumber-preprocessor";




Given(/^user login to application$/, () => {
	cy.visit('/')
});

When(/^user click get link$/, () => {
	cy.contains('get').click()	
});
