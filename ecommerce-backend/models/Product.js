const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        image: { type: String },
        category: { type: String, required: true },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;