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
});
