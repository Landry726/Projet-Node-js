import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Solde Total', ' Solde Minimal', ' Solde Maximal'],
          datasets: [{
            data: [data.totalSolde, data.minSolde, data.maxSolde],
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.7)',
            ],
            borderWidth: 0,
          }],
        },
        options: {
          // responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: true,
            labels: {
              fontColor: 'black',
              fontSize: 14,
              fontFamily: 'Arial',
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default PieChart;
