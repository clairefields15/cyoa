import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

export const QualityOfLife = ({ cityDetails }) => {
  const labels = cityDetails.qualityOfLife.map(detail => {
    return detail.name;
  });

  const scores = cityDetails.qualityOfLife.map(detail => {
    return parseInt(detail.scoreOutOfTen);
  });

  const data = {
    labels: labels,
    datasets: [
      {
        data: scores,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    }
  };

  return (
    <section>
      <h2>Quality Of Life</h2>
      <div className='chart'>
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

QualityOfLife.propTypes = {
  cityDetails: PropTypes.object.isRequired
};
