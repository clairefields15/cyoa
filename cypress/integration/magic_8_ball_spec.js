describe('Magic 8 ball user interaction', () => {
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
  });

  it('should be able to click the button to ask the magic 8 ball a question', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').click();
    cy.intercept(
      'GET',
      'https://8ball.delegator.com/magic/JSON/Should%20I%20move%3F',
      {
        statusCode: 200,
        fixture: 'magic_8.json'
      }
    );
    cy.get('.message').contains('NO WAY!');
  });

  it('should see a message if the fetch fails (404)', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').click();
    cy.intercept(
      'GET',
      'https://8ball.delegator.com/magic/JSON/Should%20I%20move%3F',
      {
        statusCode: 404
      }
    );
    cy.get('.message').contains('Oops, 404. Check back later.');
  });

  it('should see a message if the fetch fails (500)', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').click();
    cy.intercept(
      'GET',
      'https://8ball.delegator.com/magic/JSON/Should%20I%20move%3F',
      {
        statusCode: 500
      }
    );
    cy.get('.message').contains(
      "So sorry, our servers are down, you'll have to dream another day"
    );
  });
});
