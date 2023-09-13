describe('template spec', () => {
  it('passes1', () => {
    cy.visit('/')
    cy.get('h1')
    cy.contains('get').click() 
    //cy.get('').should('exist').click()
     //cy.get('').should('exist').select('')
   
  })

  it('passes2', () => {
    cy.log("Login page")
  })
})