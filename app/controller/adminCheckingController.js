const UserModel = require("../models/userSchema")

const adminCheckingController = () => {
    return {
        async index (req, res) {
            const email = req.query.email 
            const user = await UserModel.findOne({email: email})
            if(user?.role === "admin") {
                const isAdmin = true
                res.send({isAdmin})
            }
        }
    }
}

module.exports = adminCheckingController