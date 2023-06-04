const UserModel = require("../models/userSchema")

const adminCheckingController = () => {
    return {
        async index (req, res) {
            const email = req.query.email 
            if (req.decoded.email !== email) {
                return res.send({ admin: false })
              }
            const query = { email: email }
            const user = await UserModel.findOne(query);
            const result = { admin: user?.role === 'admin' }
            res.send(result);
        }
    }
}

module.exports = adminCheckingController