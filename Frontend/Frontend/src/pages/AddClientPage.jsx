import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUserForm = () => {
  // const [id , setId] = useState('');
  const [nom, setNom] = useState('');
  const [solde, setSolde] = useState('');

  const navigate  = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { nom, solde };

    axios.post('http://localhost:3000/client/', newUser)
      .then(response => {
        console.log(response.data);
        alert('Client ajouté avec succès');
        navigate('/');
        setNom('');
        setSolde('');
      })
      .catch(error => {
        console.error('Error adding user:', error);
        alert(error);
      });
  };

  return (
    <div className='p-6'>
      <h1 className='text-xl font-bold mb-4'>Ajouter un Client</h1>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <input className='border p-2 rounded ' placeholder='Nom' type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
          <input className='border p-2 rounded' type="number" placeholder='Solde' value={solde} onChange={(e) => setSolde(e.target.value)} required />
        <button className='px-4 py-2 bg-blue-500 text-white rounded-xl' type="submit">Ajouter </button>
      </form>
    </div>
  );
};

export default AddUserForm;
