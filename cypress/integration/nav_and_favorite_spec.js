// modal should show with "added to favorites"
// you shouldn't see that city again on the main page
// once all cities in the array have been liked/disliked you should see a message

describe('Navigation and favoriting a city', () => {
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
  });

  it('Should have navigation buttons', () => {
    cy.get('button').contains('Nope');
    cy.get('a').contains('Favorites');
    cy.get('button').contains('Like');
    cy.get('[id=like-btn]').should('be.visible');
  });

  it('Clicking on favorites button changes url and nav buttons', () => {
    cy.get('a').contains('Favorites').click();
    cy.url().should('include', '/favorites');
    cy.get('a').contains('Explore');
    cy.get('[id=like-btn]').should('not.exist');
    cy.get('[id=favorites-btn]').should('not.exist');
    cy.get('[id=nope-btn]').should('not.exist');
  });

  it('Clicking on explore button changes url and nav buttons', () => {
    cy.visit('http://localhost:3000/favorites');
    cy.get('a').contains('Explore').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('a').contains('Favorites');
    cy.get('[id=like-btn]').should('exist');
    cy.get('[id=favorites-btn]').should('exist');
    cy.get('[id=nope-btn]').should('exist');
  });

  it('Should see a message if I have no favorites', () => {
    cy.get('a').contains('Favorites').click();
    cy.contains('Your Favorites');
    cy.contains("You don't have any favorites yet");
  });

  it('Should be able to add a city to my favorites list', () => {
    cy.get('[id=like-btn]').click();
    cy.get('a').contains('Favorites').click();
    cy.get('section').contains('City:');
  });
});
