describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/');
  })
})

describe('Header and Search spec', () => {
  it('should display author name, ', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('By David Colón')
  })

  it('should display city name', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="location"]').should('exist');;
  })

  it('should display search city modal on location click', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="location"]').click();
    cy.get('[data-cy="search-city-modal"]').should('exist');
  })

  it('should display search city modal and close on click', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="location"]').click();
    cy.get('[data-cy="search-city-modal"]').should('exist');
    cy.get('[data-cy="search-back"]').click();
    cy.get('[data-cy="search-city-modal"]').should('not.exist');
  })



  it('should display search cities results', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="location"]').click();
    cy.get('[data-cy="search-input"]').type("New York");
    cy.get('[data-cy="search-result"]').contains('New York')
  })

  it('should display new selected city', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="location"]').click();
    cy.get('[data-cy="search-input"]').type("New York");
    cy.get('[data-cy="search-result"]').first().click();
    cy.get('[data-cy="location"]').contains("New York");
    cy.get('[data-cy="search-city-modal"]').should('not.exist');
  })
})
