const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

const ReviewModel = mongoose.model("review", ReviewSchema)

module.exports = ReviewModel