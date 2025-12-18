const express = require('express');
const app = express();
const cors = require('cors');
const body = require("body-parser");
const clientRoute = require('./Routes/Routes_Client');

app.use(cors());
app.use(body.json());

// Middleware pour les requêtes JSON parse
app.use(express.json());

//Routes
app.use('/', clientRoute);

//Serveur
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(` Le Server est lancé sur le port ${PORT}`);
});
