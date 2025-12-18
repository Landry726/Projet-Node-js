import React from "react";

const CardSolde = ({ title, value, icon: Icon, percentage, isUp }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 flex flex-col items-start min-w-50 hover:shadow-md transition-shadow">
      
      {/* Ligne du haut : icône */}
      <div className="flex items-center justify-between">
        <div className="p-3 rounded-full bg-gray-100">
          <Icon className="text-gray-600 text-xl" />
        </div>
      </div>

      {/* Valeur principale */}
      <div>
        <h2 className="text-4xl font-extrabold text-[#2b26ce]">
          {Number(value).toLocaleString()}
        </h2>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default CardSolde;
