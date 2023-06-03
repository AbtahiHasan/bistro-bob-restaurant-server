const jwt = require("jsonwebtoken")
const verifyToken = (req, res, next) => {
    const authorization = req.headers.authorization
    if(!authorization) {
        res.status(401).send({error: true, message: "unauthorized access"})
    }

    const token = authorization.split(" ")[1]
    jwt.verify(token, process.env.SECKRET_KEY, (error, decoded) => {
        if(error) {
            res.status(401).send({error: true, message: "unauthorized access"})
        }
        req.decoded = decoded
        next()
    })
}

module.exports = verifyToken