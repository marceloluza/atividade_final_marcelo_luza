const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  status: { type: String, enum: ['pendente', 'comprado'], default: 'pendente' },
  listId: { type: mongoose.Schema.Types.ObjectId, ref: 'List', required: true },
});

module.exports = mongoose.model('Item', ItemSchema);
