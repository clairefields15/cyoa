describe('Navigation, liking and disliking cities', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', {
      statusCode: 200,
      fixture: 'multipleCities.json'
    });
    cy.visit('/');
  });

  it('Should have navigation buttons', () => {
    cy.get('[id=nope-btn]').should('be.visible');
    cy.get('[id=favorites-btn]').should('be.visible');
    cy.get('[id=like-btn]').should('be.visible');
    cy.get('[id=explore-btn]').should('not.exist');
  });

  it('Clicking on favorites button changes url and nav buttons', () => {
    cy.get('[id=favorites-btn]').click();
    cy.url().should('include', '/favorites');
    cy.get('[id=explore-btn]').should('exist');
    cy.get('[id=like-btn]').should('not.exist');
    cy.get('[id=favorites-btn]').should('not.exist');
    cy.get('[id=nope-btn]').should('not.exist');
  });

  it('Clicking on explore button changes url and nav buttons', () => {
    cy.visit('/favorites');
    cy.get('button').contains('Explore').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('a').contains('Favorites');
    cy.get('[id=like-btn]').should('exist');
    cy.get('[id=favorites-btn]').should('exist');
    cy.get('[id=nope-btn]').should('exist');
  });

  it('Clicking on the logo changes url', () => {
    cy.visit('/favorites');
    cy.get('h1').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('a').contains('Favorites');
    cy.get('[id=like-btn]').should('exist');
    cy.get('[id=favorites-btn]').should('exist');
    cy.get('[id=nope-btn]').should('exist');
  });

  it('Should see a message if I have no favorites', () => {
    cy.get('[id=favorites-btn]').click();
    cy.contains('Your Favorites');
    cy.contains("You don't have any favorites yet");
  });

  it('Should be able to add a city to my favorites list', () => {
    cy.get('[id=like-btn]').click();
    cy.contains('added to favorites... finding your next city now!');
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', {
      statusCode: 200,
      fixture: 'multipleCities.json'
    });
    cy.get('[id=favorites-btn]').click();
    cy.get('.city-name-fav').should('have.length', 1).should('be.visible');
  });

  it('Should be able to dislike a city and see another one', () => {
    cy.get('[id=nope-btn]').click();
    cy.contains("You won't see that city again");
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
    cy.contains('Summary');
    cy.get('[id=favorites-btn]').click();
    cy.contains("You don't have any favorites yet");
  });
});
