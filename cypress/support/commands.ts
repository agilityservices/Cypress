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


Cypress.Commands.add('clickElement',(element)=>{
    cy.get(element).should('exist').click()
})

Cypress.Commands.add('typeElement',(element,text)=>{
    cy.get(element).should('exist').type(text)
})
// resultText(callback: (text: string) => void): void {
//     cy.get(this._resultSearch, { timeout: 20000 }).then(($elem) => {
//       callback($elem.text())
//     })

declare global{
    namespace Cypress{
        interface Chainable{
            clickElement(element: string): Chainable<void>
            typeElement(element , text: string): Chainable<void>
        }
    }
}
