const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'open'
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
