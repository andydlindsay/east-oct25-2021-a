describe('tests for the input field', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('.search__form')
      .find('input')
      .as('input-field');
  });

  it('can type into an input field', () => {
    cy.get('@input-field')
      .type('Carrie Underwood', { delay: 150 })
      .should('have.value', 'Carrie Underwood');
  });

  it('can handle backspace', () => {
    cy.get('@input-field')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 200 })
      .should('have.value', 'Bee Gees');
  });

});
