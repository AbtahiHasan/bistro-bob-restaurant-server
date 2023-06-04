const jwt = require("jsonwebtoken")
const jwtController = () => {
    return {        
        index (req, res) {
            const email = req.query.email
            const token = jwt.sign({
                email: email,
            }, process.env.SECKRET_KEY, { expiresIn: '10h' })

            res.send({token})
        }
    }
};

module.exports = jwtController;