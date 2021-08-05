export const checkForErrors = response => {
  if (!response.ok) {
    throw new Error(response.status);
  } else {
    return response.json();
  }
};

export const cleanNameData = data => {
  let arrayOfNames = data['_embedded']['city:search-results'];
  return arrayOfNames.map(item => {
    let name = item['matching_full_name'].split(',');
    let link = item['_links']['city:item'].href;
    let id = link.split(':')[2].replace('/', '');
    return {
      id: id,
      city: name[0] + ',' + name[2],
      apiLink: link
    };
  });
};
