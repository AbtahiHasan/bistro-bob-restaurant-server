const express = require("express")
const client = express.Router()
const menuController = require("../app/controller/menuController")
const reviewsController = require("../app/controller/reviewsController")
const cartController = require("../app/controller/cartController")
const userController = require("../app/controller/userController")

// get methods 
client.get("/", menuController().index)
client.get("/menus", menuController().menus)
client.get("/menu/:id", menuController().menu)
client.get("/category", menuController().category)
client.get("/reviews", reviewsController().index)
client.get("/carts", cartController().carts)


// post methods 
client.post("/add-cart", cartController().addCart)

// delete methods 
client.delete("/cart/:id", cartController().deleteCart)




// user apies 
client.get("/users", userController().index)
client.post("/add-user", userController().addUser)
client.put("/make-admin/:email", userController().makeAdmin)

module.exports = client