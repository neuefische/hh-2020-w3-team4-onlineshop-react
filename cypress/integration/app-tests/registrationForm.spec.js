/// <reference types="cypress" />

describe('user registration', () => {
  it('should create a new user', () => {
    cy.visit('http://localhost:3000/customers')
    cy.get('[name="name"]').type('John McEnroe')
    cy.get('[data-cy="register-email"]').type('Johnny@tennislegend.com')
    cy.contains('Register').click()
  })

  it('should fail user registration with no input values', () => {
    cy.visit('http://localhost:3000/customers')
    cy.contains('Register').click()
  })

  it('should fail user registration with invalid email', () => {
    cy.visit('http://localhost:3000/customers')
    cy.get('[name="name"]').type('John McEnroe')
    cy.get('[data-cy="register-email"]').type('Johnny.tennislegend.com')
    cy.contains('Register').click()
  })

  it('should fail user registration with no email', () => {
    cy.visit('http://localhost:3000/customers')
    cy.get('[name="name"]').type('John McEnroe')
    cy.contains('Register').click()
  })

  it('should fail user registration with no name', () => {
    cy.visit('http://localhost:3000/customers')
    cy.get('[data-cy="register-email"]').type('Johnny.tennislegend.com')
    cy.contains('Register').click()
  })
})
