// UsersList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import "../App.css";
// import '../Style/Style.css';

const UsersList = () => {
  
  const [client, setClient] = useState([]);
  const [editedUser, setEditedUser] = useState(null);
  const [maxSolde, setMaxSolde] = useState(null);
  const [minSolde,setMinSolde] = useState(null);
  const [totalSolde,setTotalSolde] = useState(null);
  const navigate  = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/client')
      .then(response => {
        setClient(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });

      fetchSolde();
  }, []);

  const fetchSolde = async () => {
    try {
      const response = await axios.get('http://localhost:8000/solde');
      setMaxSolde(response.data.maxSolde);
      setMinSolde(response.data.minSolde);
      setTotalSolde(response.data.totalSolde);
    } catch (error) {
      console.error('Error fetching solde :', error);
    }
  };

  const handleEdit = (user) => {
    setEditedUser(user);
  };


  const handleUpdate = (updatedUserData) => {
    axios.put(`http://localhost:8000/client/${updatedUserData.id}`, updatedUserData)
      .then(response => {
        console.log('User updated successfully');
        alert('Client modifié avec succès');
        navigate('/');
        // Re-fetch users after update
        axios.get('http://localhost:8000/client')
          .then(response => {
            setClient(response.data);
            setEditedUser(null); // Clear edited user data
          })
          .catch(error => {
            console.error('Error fetching users after update:', error);
          });
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/client/${id}`)
      .then(response => {
        alert('Clients supprimer');
        // Re-fetch users after deletion
        axios.get('http://localhost:8000/client')
          .then(response => {
            setClient(response.data);
          })
          .catch(error => {
            console.error('Error fetching users after deletion:', error);
          });
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="bg-black-400">
      <h2>Liste Client</h2>
        <a href={`/Ajout`}>Ajouter</a>
        <a href={`/chart`}>Diagramme</a>
      <table >
        <thead >
          <tr>
            <th>ID</th>
            <th>NOM</th>
            <th>SOLDE</th>
            <th>OBSERVATION</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {client.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nom}</td>
              <td>{user.solde}</td>
              <td>{user.solde <1000 ? 'insuffisant' : user.solde <= 5000 ? 'Moyen' : 'Eleve'}</td>
              <td>
                <button className='bg-red-500' onClick={() => handleDelete(user.id)}>Supprimer</button>
                <button onClick={() => handleEdit(user)}>Modifer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
      <h4>Solde maximal: { maxSolde }</h4>
      <h4>Solde minimal: { minSolde }</h4>
      <h4>Solde Total: { totalSolde }</h4>
    </div>
      {editedUser && (
        <EditUserForm user={editedUser} onUpdate={handleUpdate} />
      )}
    </div>
  );
};

const EditUserForm = ({ user, onUpdate }) => {
  const [nom, setNom] = useState(user.nom);
  const [solde, setSolde] = useState(user.solde);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = { id: user.id, nom, solde };
    onUpdate(updatedUserData);
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="text" value={solde} onChange={(e) => setSolde(e.target.value)} required />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UsersList;
