const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
        trim: true
    },
    eventDescription: {
        type: String,
        required: true,
        trim: true
    },
    eventLeader: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    eventImage: {
        data: Buffer,
        contentType: String
    }
})

module.exports = new mongoose.model("event", eventSchema);