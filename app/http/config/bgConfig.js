const mongoose = require("mongoose")



const connectDb = () => {
    mongoose.connect(process.env.MONGOBD_URI, 
        {useNewUrlParser: true,
        useUnifiedTopology: true})
    .then(res => console.log("database is concted"))
    .catch(error => console.log(error))
}

module.exports = connectDb