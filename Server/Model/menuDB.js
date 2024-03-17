const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('menuData', menuSchema, 'menu');