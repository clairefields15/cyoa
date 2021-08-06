export const checkForErrors = response => {
  if (response.status === 404) {
    throw new Error(
      "Sorry, we're having trouble finding any cities for you. Check back later"
    );
  } else if (response.status === 500) {
    throw new Error(
      "So sorry, our servers are down, you'll have to dream another day"
    );
  } else if (response.ok) {
    return response.json();
  } else {
    throw new Error('Something went wrong');
  }
};

export const cleanScores = data => {
  let qualityOfLife = data.categories.map(category => {
    return {
      name: category.name,
      scoreOutOfTen: parseInt(category['score_out_of_10'].toFixed(1))
    };
  });

  let cleanedSummary = data.summary.replace(/(<([^>]+)>)/gi, '');

  return {
    qualityOfLife: qualityOfLife,
    summary: cleanedSummary,
    totalScore: data['teleport_city_score'].toFixed(2)
  };
};

// export const cleanDetails = data => {
//   console.log('cleaning!', data);
//   let populationSize, climate, costOfLiving, culture, minorityRights;

//   return data.reduce(
//     (details, dataPoint) => {
//       if (dataPoint.id === 'CITY-SIZE') {
//         details.populationSize = {
//           populationInMillions:
//             dataPoint.data[0]['float_value'] || 'No information available'
//         };
//       } else if (dataPoint.id === 'CLIMATE') {
//         details.climate = {
//           hoursOfDaylight:
//             dataPoint.data[0]['float_value'] || 'No information available',
//           clearDaysPerYear:
//             dataPoint.data[1]['float_value'] || 'No information available',
//           rainyDaysPerYear:
//             dataPoint.data[2]['float_value'] || 'No information available',
//           weatherType:
//             dataPoint.data[8]['string_value'] || 'No information available'
//         };
//       } else if (dataPoint.id === 'COST-OF-LIVING') {
//         details.costOfLiving = {
//           cappuccino:
//             dataPoint.data[3]['currency_dollar_value'] ||
//             'No information available',
//           beer:
//             dataPoint.data[6]['currency_dollar_value'] ||
//             'No information available',
//           gymMembership:
//             dataPoint.data[5]['currency_dollar_value'] ||
//             'No information available',
//           lunch:
//             dataPoint.data[8]['currency_dollar_value'] ||
//             'No information available'
//         };
//       } else if (dataPoint.id === 'CULTURE') {
//         details.culture = {
//           artGalleries:
//             dataPoint.data[1]['int_value'] || 'No information available',
//           cinemas: dataPoint.data[3]['int_value'] || 'No information available',
//           comedyClubs:
//             dataPoint.data[5]['int_value'] || 'No information available',
//           concertVenues:
//             dataPoint.data[7]['int_value'] || 'No information available',
//           historicalSites:
//             dataPoint.data[9]['int_value'] || 'No information available',
//           museums:
//             dataPoint.data[11]['int_value'] || 'No information available',
//           performingArtsVenues:
//             dataPoint.data[13]['int_value'] || 'No information available',
//           sportsVenues:
//             dataPoint.data[15]['int_value'] || 'No information available',
//           zoos: dataPoint.data[17]['int_value'] || 'No information available'
//         };
//       } else if (dataPoint.id === 'MINORITIES') {
//         details.minorityRights = {
//           genderChangingRights:
//             dataPoint.data[2]['string_value'] || 'No information available',
//           discrimination:
//             dataPoint.data[4]['string_value'] || 'No information available',
//           homosexualityRights:
//             dataPoint.data[7]['string_value'] || 'No information available',
//           gayMarriage:
//             dataPoint.data[9]['string_value'] || 'No information available',
//           acceptancePercentInFavor:
//             dataPoint.data[10]['percent_value'] || 'No information available'
//         };
//       }
//       return details;
//     },
//     { populationSize, climate, costOfLiving, culture, minorityRights }
//   );
// };
