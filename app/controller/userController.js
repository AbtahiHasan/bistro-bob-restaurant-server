const { ObjectId } = require("mongodb");
const UserModel = require("./../models/userSchema")
const userController = () => {
    return {
        async index(req, res) {
            const result = await UserModel.find()
            res.send(result)
        },
        async addUser(req, res) {
            const user = req.body
            const isUserPresent = await UserModel.findOne({email: user.email})
            if(isUserPresent) {
                return res.send({
                    error: "this user is already exist"
                })
            }
            const newUser = new UserModel({
                name: user.name,
                photo_url: user.photo_url,
                email: user.email
            })
            const result = await newUser.save()
            res.send(result)
        },
        async makeAdmin(req, res) {
            const email = req.params.email
            const result = await UserModel.updateOne(
                {email: email},
                {
                    $set: {
                        role: "admin"
                    }                   
                })
            res.send(result)

        },
        async deleteUser(req, res) {
            const id = req.params.id
            const result = await UserModel.deleteOne({_id: new ObjectId(id)})
            res.send(result)
        }
    }
};

module.exports = userController;