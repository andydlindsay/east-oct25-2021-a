describe('final test', () => {

  it('can display the results from an API request', () => {
    // visit the app
    cy.visit('/');

    // tell Cypress to mock HTTP requests
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('search-results');

    // get the search form and type in 'Daft Punk'
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk');

    // wait for the search results to load
    cy.wait('@search-results');
      
    // look through the results for a particular album
    cy.get('main')
      .contains('Random Access Memories');

    // uncheck the explicit checkbox
    cy.get('#Explicit')
      .uncheck();

    // search for the explicit album hoping NOT to find it
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});
