const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('locationData', locationSchema, 'location');