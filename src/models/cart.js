const mongoose = require('mongoose');

const schema = mongoose.Schema({
    timestamp: { type: Date, require: true },
    products: { type: Array, require: true },
});

const Cart = mongoose.model('carts', schema);

module.exports = Cart;