const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: {type: String, required: true},
    quantity: {type: Number},
    productImage: { type: String, required: true}
});

module.exports = mongoose.model('Product', productSchema);