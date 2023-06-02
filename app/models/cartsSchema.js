const mongoose = require("mongoose")

const Schema = mongoose.Schema

const cartSchema = new Schema({
    menu_id: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    item_name : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const cartModel = mongoose.model("cart", cartSchema)
module.exports =  cartModel