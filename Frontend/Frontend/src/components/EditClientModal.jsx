import React, { useState, useEffect } from 'react';
import { FiX, FiUser, FiDollarSign } from 'react-icons/fi';

const EditClientModal = ({ user, onUpdate, onCancel }) => {
  const [nom, setNom] = useState(user.nom);
  const [solde, setSolde] = useState(user.solde);
  const [isVisible, setIsVisible] = useState(false);

  // Animation à l'ouverture
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...user, nom, solde });
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
    
      <div 
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={onCancel}
      ></div>

      <div className={`relative bg-white w-full max-w-md rounded-xl shadow-2xl border border-gray-100 transform transition-all duration-300 ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        

        <div className="flex items-center justify-between p-6 border-b border-gray-50">
          <h2 className="text-xl font-bold text-gray-800">Modifier le Client</h2>
          <button 
            onClick={onCancel} 
            className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>


        <form onSubmit={handleSubmit} className="p-6 space-y-5">
      
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
              <FiUser size={14} /> Nom du client
            </label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50/50"
              placeholder="Ex: Louis Vuitton"
              required
            />
          </div>

  
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
              <FiDollarSign size={14} /> Solde actuel
            </label>
            <input
              type="number"
              value={solde}
              onChange={(e) => setSolde(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50/50"
              placeholder="0.00"
              required
            />
          </div>


          <div className="flex justify-end gap-3 pt-4">
            <button 
              type="button" 
              onClick={onCancel} 
              className="px-5 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Annuler
            </button>
            <button 
              type="submit" 
              className="px-5 py-2.5 text-sm font-medium text-white bg-[#312e81] hover:bg-indigo-800 rounded-lg shadow-md shadow-indigo-200 transition-all active:scale-95"
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditClientModal;