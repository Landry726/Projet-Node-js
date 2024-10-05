const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('GestionClient', 'landry', '2004', {
  host: 'localhost',
  dialect: 'mysql',
  port:3306,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connexion à la base de données établie avec succès.');
  })
  .catch(err => {
    console.error('Erreur de connexion à la base de données :', err);
  });

module.exports = sequelize;
