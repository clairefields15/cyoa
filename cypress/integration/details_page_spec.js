describe('Click favorites card to view details', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', {
      statusCode: 200,
      fixture: 'allCities.json'
    });
    cy.intercept(
      'GET',
      'https://api.teleport.org/api/urban_areas/slug:aarhus/scores/',
      {
        statusCode: 200,
        fixture: 'aarhus_scores.json'
      }
    );
    cy.intercept(
      'GET',
      'https://api.teleport.org/api/urban_areas/slug:aarhus/images/',
      {
        statusCode: 200,
        fixture: 'aarhus_images.json'
      }
    );
    cy.visit('http://localhost:3000');
    cy.get('[id=like-btn]').click();
    cy.contains('added to favorites... finding your next city now!');
    cy.get('[id=favorites-btn]').click();
    cy.get('.city-name-fav').should('have.length', 1).should('be.visible');
  });
});
