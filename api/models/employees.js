const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId, 
    name: { type: String, required: true },
    description: { type: String, required: true },
    employeeImage: { type: String, required: true }    
});

module.exports = mongoose.model('Employee', employeeSchema);