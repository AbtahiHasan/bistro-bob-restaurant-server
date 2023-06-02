require("dotenv").config()
const connectDb = require("./app/http/config/bgConfig")
// db connections 
connectDb()
const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors");
const clientApi = require("./routes/clientApi")


app.use(cors())
app.use(express.json())
app.use("/", clientApi)


app.listen(port, () => {
    console.log(`this server is running at ${port}`)
})