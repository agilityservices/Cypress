/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

function setEmailAddress(emailAddress: string) {
    cy.get('#ap_email').should('be.visible').and('be.empty').type(emailAddress, { delay: 50 });
    cy.get('#ap_email').should('have.value', emailAddress);
  }
  
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


Cypress.Commands.add('click',(element)=>{
    cy.get(element).should('exist').click()
})

Cypress.Commands.add('type',(element,text)=>{
    cy.get(element).should('exist').type(text)
})

declare namespace Cypress{
    interface Chainable{
        click(element:any): Chainable<void>
        type(element , text): Chainable<void>
    }
}
