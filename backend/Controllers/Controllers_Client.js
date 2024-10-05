const Client = require('../Models/Models_Client');

// Création d'un client
exports.createClient = async (req, res) => {
  try {
    const newUser = await Client.create(req.body);
    res.json(newUser);
  } catch (error) {
    console.error('Error creating client in controllers : ', error);
    res.status(500).json({ error: 'Failed to create client' });
  }
};

// Récupération de tous les clients
exports.getAllClient = async (req, res) => {
  try {
    const users = await Client.findAll();
    console.log(users);
    res.json(users);
  } catch (error) {
    console.error('Error fetching client in controllers :', error);
    res.status(500).json({ error: 'Failed to fetch cient' });
  }
};

// Récupération d'un clients par ID
exports.getClientById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Client.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching client in controllers :', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Mise à jour d'un client
exports.updateClient = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Client.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: 'User not found' });
    }
    const updatedUser = await Client.findByPk(id);
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating client in controllers :', error);
    res.status(500).json({ error: 'Failed to update client' });
  }
};

// Suppression d'un client
exports.deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Client.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: 'client not found' });
    }
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting client in controllers:', error);
    res.status(500).json({ error: 'Failed to delete client' });
  }
};


//Recuperer solde total,min,max d'un client
exports.getSolde = async (req, res) => {
  try {
    const maxSolde = await Client.max('solde');
    const minSolde = await Client.min('solde');
    const totalSolde = await Client.sum('solde');
    res.json({ maxSolde,minSolde ,totalSolde});
  } catch (error) {
    console.error('Error getting max solde in controller:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// controllers/UserController.js
