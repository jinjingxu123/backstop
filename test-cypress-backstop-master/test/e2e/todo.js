


describe('My First Test', function() {
  it("Gets, types and asserts", function() {
    cy.visit('http://localhost:8080')
    cy.get('#app > div > form > input[type=text]').type('reading')
    cy.get ('#app > div > form > button').click()
    cy.get('#app > div > form > input[type=text]').type('running')
    cy.get ('#app > div > form > button').click()
    cy.get("#app > div > table > tbody").should("have.length","2")

    cy.get('#app > div > table > tbody > tr > td:nth-child(2) > button:nth-child(1)').click()
    cy.get('#app > div > table > tbody > tr > td:nth-child(1) > form > input').type('movie')
    cy.get('#app > div > table > tbody > tr > td:nth-child(2) > button:nth-child(1)').click()

    cy.get('#app > div > table > tbody > tr > td:nth-child(2) > button.delete-btn').click()

    cy.get("#app > div > table > tbody").should("have.length","1")
  })
})
