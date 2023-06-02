const UserModel = require("./../models/userSchema")
const userController = () => {
    return {
        async index(req, res) {
            const result = await UserModel.find()
            res.send(result)
        },
        async addUser(req, res) {
            const user = req.body
            const isUserPresent = await UserModel.find({email: user.email})
            if(isUserPresent) {
                return res.send({
                    error: "this user is already exist"
                })
            }
            const newUser = new UserModel({
                email: user.email
            },
            {
                name: user.name,
                photo_url: user.photo_url,
                email: user.email,
            },
            {
                upsert: true
            })
            const result = await newUser.save()
            res.send(result)
        }
    }
};

module.exports = userController;