import { checkForErrors, cleanScores } from './utils';

export const fetchAllCities = async () => {
  let baseURL = 'https://api.teleport.org/api/urban_areas/';
  let response = await fetch(baseURL);
  let data = await checkForErrors(response);
  return data['_links']['ua:item'];
};

export const fetchCity = async url => {
  let scores = await fetchScores(url);
  let images = await fetchImages(url);
  let values = await Promise.all([scores, images]);
  return values;
};

export const fetchScores = async url => {
  let response = await fetch(`${url}scores/`);
  let data = await checkForErrors(response);
  return cleanScores(data);
};

export const fetchImages = async url => {
  let response = await fetch(`${url}images/`);
  let data = await checkForErrors(response);
  return data.photos[0].image;
};

export const fetchMessage = async () => {
  let url = 'https://eightballapi.com/api';
  let response = await fetch(url);
  let data = await checkForErrors(response);
  return data.reading;
};
