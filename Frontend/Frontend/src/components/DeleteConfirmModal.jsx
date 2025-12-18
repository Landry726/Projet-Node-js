import React, { useState, useEffect } from 'react';
import { FiAlertTriangle, FiX } from 'react-icons/fi';

const DeleteConfirmModal = ({ onConfirm, onCancel }) => {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

      <div 
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onCancel}
      ></div>

     
      <div 
        className={`relative bg-white w-full max-w-sm rounded-2xl shadow-2xl border border-gray-100 p-6 transform transition-all duration-300 ease-out ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
       
        <button 
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FiX size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
         
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
            <FiAlertTriangle className="text-red-500" size={32} />
          </div>

          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Confirmer la suppression ?
          </h2>
          
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Êtes-vous sûr de vouloir supprimer ce client ? <br />
            Cette action est irréversible.
          </p>

          
          <div className="flex w-full gap-3">
            <button 
              onClick={onCancel} 
              className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all"
            >
              Annuler
            </button>
            <button 
              onClick={onConfirm} 
              className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-xl shadow-lg shadow-red-100 transition-all active:scale-95"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;