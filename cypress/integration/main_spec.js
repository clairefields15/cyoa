import { fetchAllCities } from '../../src/helper-fns/apiCalls';

describe('Main view', () => {
  it('As a user, I should see a logo when I first visit the site', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').contains('CYOA');
  });

  it('Should see an image and a city name', () => {
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
    cy.get('.img-container').find('img').should('be.visible');
    cy.get('h2').should('contain', 'Aarhus');
  });

  it('Should see a message if the fetch fails (404)', () => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', {
      statusCode: 404,
      fixture: 'allCities.json'
    });
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
    cy.visit('http://localhost:3000');
    cy.get('h2').should(
      'contain',
      "Sorry, we're having trouble finding any cities for you. Check back later"
    );
  });

  it('Should see a message if the fetch fails (500)', () => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', {
      statusCode: 500,
      fixture: 'allCities.json'
    });
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
    cy.visit('http://localhost:3000');
    cy.get('h2').should(
      'contain',
      "So sorry, our servers are down, you'll have to dream another day"
    );
  });

  it('Should see a message if the fetch fails (else)', () => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', {
      statusCode: 401,
      fixture: 'allCities.json'
    });
    cy.intercept(
      'GET',
      'https://api.teleport.org/api/urban_areas/slug:aarhus/scores/',
      {
        statusCode: 401,
        fixture: 'aarhus_scores.json'
      }
    );
    cy.intercept(
      'GET',
      'https://api.teleport.org/api/urban_areas/slug:aarhus/images/',
      {
        statusCode: 401,
        fixture: 'aarhus_images.json'
      }
    );
    cy.visit('http://localhost:3000');
    cy.get('h2').should('contain', 'Something went wrong');
  });

  it('Should see a summary of the city', () => {
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
    cy.get('h2').should('contain', 'Summary');
    cy.get('p').contains(
      'Aarhus, Denmark, is among the top cities with a free business environment. According to our city rankings, this is a good place to live with high ratings in safety, healthcare and environmental quality.'
    );
  });

  it('Should see a chart with quality of life metrics for the city', () => {
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
    cy.get('h2').should('contain', 'Quality Of Life');
    cy.get('canvas').should('be.visible');
  });
});
