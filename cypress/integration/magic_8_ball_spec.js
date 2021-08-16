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
    cy.visit('/');
    cy.get('[id=ball-btn]').click();
  });

  it('after button click the 8 ball should shake', () => {
    cy.intercept(
      'GET',
      'https://8ball.delegator.com/magic/JSON/Should%20I%20move%3F',
      {
        statusCode: 200,
        fixture: 'magic_8.json'
      }
    );
    cy.get('.magic-8-ball').find('img').should('have.class', 'shaking');
  });

  it('after request is resolved, the 8 ball image should change', () => {
    cy.intercept(
      'GET',
      'https://8ball.delegator.com/magic/JSON/Should%20I%20move%3F',
      {
        statusCode: 200,
        fixture: 'magic_8.json'
      }
    );
    cy.wait(5500);
    cy.get('.magic-8-ball')
      .find('img')
      .should('have.attr', 'alt')
      .then(altText => {
        expect(altText).to.equal('Magic 8 ball with response');
      });
  });

  it('should see an answer when the request resolves', () => {
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

  it('should see a message if the fetch fails (other)', () => {
    cy.intercept(
      'GET',
      'https://8ball.delegator.com/magic/JSON/Should%20I%20move%3F',
      {
        statusCode: 402
      }
    );
    cy.get('.message').contains('Something went wrong');
  });
});
