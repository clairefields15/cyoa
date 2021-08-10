import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import './QualityOfLife.css';
defaults.font.size = 14;

export const QualityOfLife = ({ cityDetails }) => {
  const labels = cityDetails.qualityOfLife.map(detail => {
    if (detail.name === 'Environmental Quality') {
      return 'Environment';
    }
    return detail.name;
  });

  const scores = cityDetails.qualityOfLife.map(detail => {
    return detail.scoreOutOfTen;
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
        borderWidth: 1,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        maxBarThickness: 20
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          min: 0,
          max: 100,
          stepSize: 20
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      },
      labels: {
        fontSize: 50
      }
    }
  };

  return (
    <section className='qual-of-life'>
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
