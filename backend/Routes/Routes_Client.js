const express = require('express');
const router = express.Router();
const userController = require('../Controllers/Controllers_Client');

// Créer un nouvel utilisateur
router.post('/client', userController.createClient);

// Récupérer tous les utilisateurs
router.get('/client', userController.getAllClient);

// Récupérer un utilisateur par ID
router.get('/client/:id', userController.getClientById);

// Mettre à jour un utilisateur
router.put('/client/:id', userController.updateClient);

// Supprimer un utilisateur
router.delete('/client/:id', userController.deleteClient);

//Recuperer le solde maximal
router.get('/solde' , userController.getSolde); 
module.exports = router;
