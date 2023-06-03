const UserModel = require("../../models/userSchema")

const verityAdmin = (req, res, next) => {
    const email = req.decoded.email
    const user = UserModel.findOne({email: email})
    if(user.role === "admin") {
        next()
    }
    else {
       return res.status(401).send({error: true, message: "unauthorized access"})
    }
}

module.exports = verityAdmin