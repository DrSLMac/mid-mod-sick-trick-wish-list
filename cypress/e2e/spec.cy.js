describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      fixture: 'sk8Tricks' //sample data file
    })
    cy.visit('http://localhost:3000/?name=&obstacle=&stance=&tutorial=')
  })
  it('Should have a header', () => {
    cy.contains('Sick Trick Wish List')
  })
  it('Should have some tricks rendered to page', () => {
    cy.get('.tiles').should('have.length', 3)
      .get('.tiles').first().should('have.class', 'tiles').contains('https://www.youtube.com/watch?v=XGw3YkQmNig')
      .get('.tiles').last().should('have.class', 'tiles').contains('https://www.youtube.com/watch?v=9N9swrZU1HA')
  })
  it('Should be able to add new trick through the form', () => {
    cy.get("select[name='stance']").select('Switch').should('have.value', 'Switch')
      .get('input[type="text"]').first().type('basic ollie').should('have.value', 'basic ollie')
      .get('select[name="obstacle"]').select('Ledge').should('have.value', 'Ledge')
      .get('input[type="text"]').last().type('link to basic ollie').should('have.value', 'link to basic ollie')
      .get('.send-button').click()
  })
})