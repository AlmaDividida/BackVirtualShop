const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: String,
    description: String,
    price: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('products',ProductSchema);
