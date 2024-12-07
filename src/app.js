const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const listRoutes = require('./routes/lists.routes');
const itemRoutes = require('./routes/items.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/lista-de-compras')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error(err));

app.use('/api/lists', listRoutes);
app.use('/api/items', itemRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
