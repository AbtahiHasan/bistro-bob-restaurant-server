const UserModel = require("../../models/userSchema")

const verityAdmin = async (req, res, next) => {
    const email = req.decoded.email
    const user = await UserModel.findOne({email: email})
    if(user?.role !== "admin") {
        return res.status(401).send({error: true, message: "unauthorized access"})
    }
        next()
    
}

module.exports = verityAdmin