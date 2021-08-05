export const checkForErrors = response => {
  if (!response.ok) {
    throw new Error(response.status);
  } else {
    return response.json();
  }
};

export const cleanDetails = data => {
  let qualityOfLife = data.categories.map(category => {
    return {
      color: category.color,
      name: category.name,
      scoreOutOfTen: category['score_out_of_10'].toFixed(1)
    };
  });
  return {
    qualityOfLife: qualityOfLife,
    summary: data.summary,
    totalScore: data['teleport_city_score'].toFixed(2)
  };
};
