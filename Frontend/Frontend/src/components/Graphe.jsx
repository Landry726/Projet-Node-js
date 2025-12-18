import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, XAxis, YAxis, CartesianGrid
} from "recharts";

const COLORS = ["#312e81", "#6366f1", "#818cf8"];

const Graphe = () => {
  const [soldeData, setSoldeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSoldes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/solde");
        setSoldeData([
          { name: "Total", value: response.data.totalSolde },
          { name: "Min", value: response.data.minSolde },
          { name: "Max", value: response.data.maxSolde },
        ]);
      } catch (error) {
        console.error("Erreur :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSoldes();
  }, []);

  if (loading) return <p className="text-center p-10">Chargement...</p>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
  
      <div className="h-87.5 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider">Répartition des fonds</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie 
              data={soldeData} 
              dataKey="value" 
              nameKey="name" 
              innerRadius={70} 
              outerRadius={100} 
              paddingAngle={8}
            >
              {soldeData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} stroke="none" />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>


      <div className="h-[350px] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider">Analyse des Soldes</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={soldeData}>
            <defs>

              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#312e81" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#312e81" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#9ca3af', fontSize: 12}} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#9ca3af', fontSize: 12}} 
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#312e81" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
    </div>
  );
};

export default Graphe;