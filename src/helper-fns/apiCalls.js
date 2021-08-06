import { checkForErrors, cleanScores } from './utils';

export const fetchAllCities = async () => {
  let baseURL = 'https://api.teleport.org/api/urban_areas/';
  let response = await fetch(baseURL);
  let data = await checkForErrors(response);
  let nestedData = data['_links']['ua:item'];
  return nestedData;
};

export const fetchCity = async url => {
  let scores = await fetchScores(url);
  let images = await fetchImages(url);
  // let details = await fetchDetails(url);
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

// export const fetchDetails = async url => {
//   let response = await fetch(`${url}details/`);
//   let data = await checkForErrors(response);
//   let cleaned = await cleanDetails(data.categories);
//   console.log('clean', cleaned);
//   return cleaned;
// };
