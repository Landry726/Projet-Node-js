

import React, { useState, useEffect } from 'react';
import PieChart from './PieChart';

const App = () => {
  const [pieChartData, setPieChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/solde');
        const data = await response.json();
        setPieChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <a href={`/`}>Liste Client</a>
      <h1>Diagramme pour visualiser les soldes</h1>
      {pieChartData && <PieChart data={pieChartData} />}
    </div>
      
  );
};

export default App;
