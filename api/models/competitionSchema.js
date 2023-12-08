const mongoose = require('mongoose');

const competitionSchema = new mongoose.Schema({
    comName: {
        type: String,
        required: true,
        trim: true
    },
    comDescription: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    venue: {
        type: String,
        required: true,
        trim: true
    },
    coordinator: [{
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            unique: true
        }
    }],
    comImage: {
        data: Buffer,
        contentType: String
    }
});

module.exports = new mongoose.model("competition", competitionSchema);