import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, FiBox, FiChevronLeft, FiChevronRight, FiUser
} from 'react-icons/fi';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  // Utilisation de useLocation pour suivre la route actuelle
  const location = useLocation();

  const menuItems = [
    { name: 'Tableau de Bord', icon: <FiHome />, path: '/' },
    { name: 'Clients', icon: <FiUser/>, path: '/clients' }, // Chemin corrigé
  ];

  return (
    <div 
      className={`h-screen bg-[#312e81] text-white transition-all duration-300 ease-in-out flex flex-col relative
        ${isExpanded ? 'w-64' : 'w-20'}`}
    >
      {/* Bouton Toggle */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-10 bg-indigo-600 rounded-full p-1 border border-indigo-400 hover:bg-indigo-500 transition-colors z-50"
      >
        {isExpanded ? <FiChevronLeft size={16}/> : <FiChevronRight size={16}/>}
      </button>

      {/* Header / Logo */}
      <div className={`p-6 flex items-center gap-3 mb-4 ${!isExpanded && 'justify-center'}`}>
        <div className="bg-white/10 p-2 rounded-lg shadow-inner">
          <FiBox size={24} className="text-indigo-300" />
        </div>
        {isExpanded && <span className="font-bold text-xl tracking-tight">The App</span>}
      </div>

      <div className="border-t border-white/10 mx-4 mb-6"></div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-2">
        {menuItems.map((item, index) => {
          // Verification dynamique de la page active
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-4 p-3 rounded-lg transition-all group relative
                ${isActive 
                  ? 'bg-indigo-600 text-white shadow-md' // Style quand l'URL correspond
                  : 'text-indigo-100/70 hover:bg-white/10 hover:text-white' // Style par défaut
                }
                ${!isExpanded && 'justify-center'}
              `}
            >
              <div className={`text-xl ${isActive ? 'text-white' : 'group-hover:text-white'}`}>
                {item.icon}
              </div>
              
              {isExpanded && (
                <span className="font-medium text-sm whitespace-nowrap">{item.name}</span>
              )}
           
              {/* Tooltip quand la sidebar est réduite */}
              {!isExpanded && (
                <div className="absolute left-full rounded-md px-3 py-2 ml-6 bg-gray-900 text-white text-xs invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-50 shadow-xl border border-white/10">
                  {item.name}
                </div>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}