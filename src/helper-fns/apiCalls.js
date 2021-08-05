import { checkForErrors, cleanNameData } from './utils';

export const fetchAllCities = async () => {
  let baseURL = 'https://api.teleport.org/api/cities/';
  let response = await fetch(baseURL);
  let data = await checkForErrors(response);
  let cleaned = await cleanNameData(data);
  return cleaned;
};
