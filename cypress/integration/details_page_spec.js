describe('Click favorites card to view details', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', {
      statusCode: 200,
      fixture: 'multipleCities.json'
    });
    cy.visit('http://localhost:3000');
    cy.get('[id=like-btn]').click();
    cy.contains('added to favorites... finding your next city now!');
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', {
      statusCode: 200,
      fixture: 'multipleCities.json'
    });
    cy.get('[id=favorites-btn]').click();
    cy.get('.city-name-fav').should('have.length', 1).should('be.visible');
  });

  it('should be able to click on a favorite card and see the url change', () => {
    cy.get('.favorites-container').find('a').click();
    cy.url().should('include', '/favorites/A');
  });

  it('should see details about the favorited city', () => {
    cy.get('.favorites-container').find('a').click();
    cy.url().should('include', '/favorites/A');
    cy.contains('Summary');
    cy.contains('Quality Of Life');
  });

  it('should not see the magic 8 ball', () => {
    cy.get('.favorites-container').find('a').click();
    cy.get('[id=ball-btn]').should('not.exist');
    cy.get('.magic-8-ball').should('not.exist');
  });

  it('should not see the like/dislike option', () => {
    cy.get('.favorites-container').find('a').click();
    cy.get('[id=like-btn]').should('not.exist');
    cy.get('[id=nope-btn]').should('not.exist');
  });

  it('should be able to navigate back to favorites or home', () => {
    cy.get('.favorites-container').find('a').click();
    cy.get('[id=favorites-btn]').should('exist');
    cy.get('h1').should('exist');
  });

  it('should see an error if the fetch fails, 404', () => {
    cy.get('.favorites-container').find('a').click();
    cy.intercept(
      'GET',
      'https://api.teleport.org/api/urban_areas/slug:aarhus/scores/',
      {
        statusCode: 404,
        fixture: 'aarhus_scores.json'
      }
    );
    cy.intercept(
      'GET',
      'https://api.teleport.org/api/urban_areas/slug:aarhus/images/',
      {
        statusCode: 404,
        fixture: 'aarhus_images.json'
      }
    );
    cy.visit('http://localhost:3000/favorites/Aarhus');
    cy.contains('Oops, 404. Check back later.');
  });

  it('should see an error if the fetch fails, 500', () => {
    cy.get('.favorites-container').find('a').click();
    cy.intercept(
      'GET',
      'https://api.teleport.org/api/urban_areas/slug:aarhus/scores/',
      {
        statusCode: 500,
        fixture: 'aarhus_scores.json'
      }
    );
    cy.intercept(
      'GET',
      'https://api.teleport.org/api/urban_areas/slug:aarhus/images/',
      {
        statusCode: 500,
        fixture: 'aarhus_images.json'
      }
    );
    cy.visit('http://localhost:3000/favorites/Aarhus');
    cy.contains(
      "So sorry, our servers are down, you'll have to dream another day"
    );
  });

  it('should see an error if the fetch fails, other', () => {
    cy.get('.favorites-container').find('a').click();
    cy.intercept(
      'GET',
      'https://api.teleport.org/api/urban_areas/slug:aarhus/scores/',
      {
        statusCode: 408,
        fixture: 'aarhus_scores.json'
      }
    );
    cy.intercept(
      'GET',
      'https://api.teleport.org/api/urban_areas/slug:aarhus/images/',
      {
        statusCode: 408,
        fixture: 'aarhus_images.json'
      }
    );
    cy.visit('http://localhost:3000/favorites/Aarhus');
    cy.contains('Something went wrong');
  });

  it('should be able to remove a city from the favorites page', () => {
    cy.get('.remove-btn').click();
    cy.get('.city-name-fav').should('not.exist');
    cy.contains(
      "You don't have any favorites yet, click Explore to get started!"
    );
  });
});
