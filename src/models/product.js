const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, require: true, max: 100 },
    price: { type: Number, require: true },
    picture: { type: String, require: false },
    description: { type: String, require: false },
    stock: { type: Number, require: true },
});

module.exports = mongoose.model('Product', productSchema);
