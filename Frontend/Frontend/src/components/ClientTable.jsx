import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const UsersTable = ({ users, onEdit, onDelete }) => {
  return (
    <table className="p-8 w-full border-collapse shadow-lg rounded-xl overflow-hidden">
      <thead>
        <tr className='bg-gray-50/50'>
          <th className="py-2 px-4 text-left text-sm font-semibold text-gray-900 rounded-l-xl ">ID</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nom</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 ">Solde</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 ">Observation</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 rounded-r-xl ">Actions</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-300'>
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-6 text-sm text-gray-700 font-medium ">{user.id}</td>
            <td className="px-6 py-6 text-sm text-gray-600 ">{user.nom}</td>
            <td className="px-6 py-6 text-sm text-gray-600 ">{user.solde}</td>
            <td className="px-6 py-6 text-sm text-gray-600">
              {user.solde < 1000 ? 'Insuffisant' : user.solde <= 5000 ? 'Moyen' : 'Élevé'}
            </td>
            <td className="flex items-center space-x-5 px-6 py-6 ">
              <button onClick={() => onEdit(user)} className="text-indigo-500 hover:text-indigo-700"><FaEdit size={18} /></button>
              <button onClick={() => onDelete(user)} className="text-red-400 hover:text-red-600"><FaTrash size={18}/></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
