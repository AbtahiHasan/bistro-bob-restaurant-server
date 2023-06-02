const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MenuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    recipe: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const MenuModel = mongoose.model("menu", MenuSchema)

module.exports = MenuModel