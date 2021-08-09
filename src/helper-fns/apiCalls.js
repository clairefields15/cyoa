import { checkForErrors, cleanScores, cleanMessage } from './utils';

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
  return data.photos[0].image.mobile;
};

export const fetchMessage = async message => {
  let params = encodeURIComponent(message);
  let url = 'https://8ball.delegator.com/magic/JSON/' + params;
  let response = await fetch(url);
  let data = await checkForErrors(response);
  return cleanMessage(data);
};
