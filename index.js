require("dotenv").config()
var bodyParser = require('body-parser')
const connectDb = require("./app/http/config/bgConfig")
// db connections 
connectDb()
const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const clientApi = require("./routes/clientApi")


app.use(cors())
app.use(express.json())
app.use("/", clientApi)


app.listen(port, () => {
    console.log(`this server is running at ${port}`)
})