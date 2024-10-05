import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUserForm = () => {
  const [id , setId] = useState('');
  const [nom, setNom] = useState('');
  const [solde, setSolde] = useState('');

  const navigate  = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id,nom, solde };

    axios.post('http://localhost:8000/client/', newUser)
      .then(response => {
        console.log(response.data);
        alert('Client ajouté avec succès');
        navigate('/');
        // Réinitialiser les champs du formulaire après l'ajout réussi
        setId('');
        setNom('');
        setSolde('');
      })
      .catch(error => {
        console.error('Error adding user:', error);
        alert("Client non Ajouté");
      });
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Id:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
        </label>
        <label>
          Nom:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
        </label>
        <label>
          Solde:
          <input type="number" value={solde} onChange={(e) => setSolde(e.target.value)} required />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
