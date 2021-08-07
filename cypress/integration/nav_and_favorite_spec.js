//when you click like:
// when modal is visible all nav buttons should be disabled
// modal should show with "added to favorites"
// when modal is visible logo should not be visible
// when modal disappears you should see a new city
// when the modal disappears all buttons should be enabled again
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
    cy.url('should.contain', '/favorites');
    cy.get('a').contains('Explore');
    cy.get('[id=like-btn]').should('not.exist');
    cy.get('[id=favorites-btn]').should('not.exist');
    cy.get('[id=nope-btn]').should('not.exist');
  });
});
