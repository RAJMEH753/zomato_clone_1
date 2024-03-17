const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    id: Number,
    city: Number
})

module.exports = mongoose.model('restaurantData', restaurantSchema, 'restaurant');