const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mealtypeSchema = new Schema({
    name: String,
    _id: String
})

module.exports = mongoose.model('mealtypeData', mealtypeSchema, 'mealtype');