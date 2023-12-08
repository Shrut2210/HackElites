const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: Date,
        required: true,
        trim: true
    },
    email: {
        type: Date,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = new mongoose.model("admin", adminSchema);