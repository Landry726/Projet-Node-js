import React, { useState, useEffect } from "react";
import axios from "axios";
import UsersTable from "../components/ClientTable";
import EditUserModal from "../components/EditClientModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import Notification from "../components/Notification";
import { useNavigate } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';

const ClientListPage = () => {
  const [users, setUsers] = useState([]);
  const [editedUser, setEditedUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/client");
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const showNotification = (message, type = "success") => {
  setNotification({ message, type });

  setTimeout(() => {
    setNotification({ message: "", type: "" });
  }, 3000);
};


    const handleUpdate = async (updatedUser) => {
  try {
    await axios.put(
      `http://localhost:3000/client/${updatedUser.id}`,
      updatedUser
    );

    showNotification("Client modifié avec succès", "success");

    fetchUsers();
    setEditedUser(null);
  } catch (error) {
    showNotification("Erreur lors de la modification", "error");
  }
};


    const handleDelete = (user) => setDeleteUser(user);

   const confirmDelete = async () => {
  try {
    await axios.delete(
      `http://localhost:3000/client/${deleteUser.id}`
    );

    showNotification("Client supprimé", "success");

    fetchUsers();
    setDeleteUser(null);
  } catch (error) {
    showNotification("Erreur suppression", "error");
  }
};

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Liste des clients</h1>
        <button
          onClick={() => navigate("/ajout")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          <FaPlus className="inline mr-2 mb-1" />
          Ajouter
        </button>
      </div>
      <UsersTable
        users={users}
        onEdit={setEditedUser}
        onDelete={handleDelete}
      />
      {editedUser && (
        <EditUserModal
          user={editedUser}
          onUpdate={handleUpdate}
          onCancel={() => setEditedUser(null)}
        />
      )}
      {deleteUser && (
        <DeleteConfirmModal
          onConfirm={confirmDelete}
          onCancel={() => setDeleteUser(null)}
        />
      )}
      <Notification message={notification.message} type={notification.type} />
    </div>
  );
};

export default ClientListPage;
