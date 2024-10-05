// PieChart.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieChartComponent from './PieChart';

const PieChart = () => {
  const [soldeData, setSoldeData] = useState(null);

  useEffect(() => {
    const fetchSoldes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/solde');
        setSoldeData(response.data);
      } catch (error) {
        console.error('Error fetching soldes:', error);
      }
    };

    fetchSoldes();
  }, []);

  return (
    <div>
      <h2>Solde Chart</h2>
      {soldeData && <PieChartComponent soldeData={soldeData} />}
    </div>
  );
};

export default PieChart;
