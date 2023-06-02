const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
    },
    photo_url: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
})

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel