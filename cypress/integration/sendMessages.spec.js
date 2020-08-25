/// <reference types="cypress" />

context('Using Chat', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
  
    it('Person1 and Person2 send messages', () => {
      // https://on.cypress.io/type
      cy.get('a[href*="/first-person"]').click()
        .get('#messageInput').click()
        .type('Hello!')
        .get('form').submit()
        .get('a[href*="/second-person"]').click()
        .get('#messageInput').click()
        .type('Coucou!')
        .get('form').submit()
    })
  })
  