import { checkForErrors, cleanDetails } from './utils';

export const fetchAllCities = async () => {
  let baseURL = 'https://api.teleport.org/api/urban_areas/';
  let response = await fetch(baseURL);
  let data = await checkForErrors(response);
  let nestedData = data['_links']['ua:item'];
  return nestedData;
};

export const fetchCity = async url => {
  let response = await fetch(`${url}scores/`);
  let data = await checkForErrors(response);
  let cleaned = await cleanDetails(data);
  return cleaned;
};
