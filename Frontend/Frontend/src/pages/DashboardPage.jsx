import React, { useEffect, useState } from 'react';
import CardSolde from '../components/CardSolde';
import Graphe from '../components/Graphe';
import axios from 'axios';
import { FiDollarSign, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

const DashboardPage = () => {
  const [soldeStats, setSoldeStats] = useState({ maxSolde: 0, minSolde: 0, totalSolde: 0 });

  useEffect(() => {
    const fetchSolde = async () => {
      try {
        const res = await axios.get('http://localhost:3000/solde');
        setSoldeStats(res.data);
      } catch (error) {
        console.error('Erreur solde:', error);
      }
    };
    fetchSolde();
  }, []);

  return (

    <div className="p-7 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        <h1 className="text-2xl font-bold text-gray-800">Tabeau de bord</h1>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardSolde 
            title="Solde Total" 
            value={soldeStats.totalSolde} 
            icon={FiDollarSign} 
          
          />
          <CardSolde 
            title="Solde Max" 
            value={soldeStats.maxSolde} 
            icon={FiTrendingUp} 
          />

          <CardSolde 
            title="Solde Min" 
            value={soldeStats.minSolde} 
            icon={FiTrendingDown} 
          />
        </div>

        
        <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
           <Graphe />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;