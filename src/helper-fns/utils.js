export const checkForErrors = response => {
  if (response.status === 404) {
    throw new Error('Oops, 404. Check back later.');
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

  let cleanedSummary = data.summary
    .replace(/(<([^>]+)>)/gi, '')
    .replace(/\r?\n|\r/, '')
    .replace(/<[^>]+>/g, '')
    .replace('Teleport', 'CYOA');

  return {
    qualityOfLife: qualityOfLife,
    summary: cleanedSummary,
    totalScore: data['teleport_city_score'].toFixed(2)
  };
};
