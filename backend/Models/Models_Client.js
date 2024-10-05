// Modèle Sequelize pour la table User
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../Config/Database');

const Client = sequelize.define('Clients', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true
    },
    nom: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    solde: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true
    }
  });



  
  module.exports = Client;
  