const express = require("express")

const client = express.Router()
const menuController = require("../app/controller/menuController")
const reviewsController = require("../app/controller/reviewsController")
const cartController = require("../app/controller/cartController")
const userController = require("../app/controller/userController")
const jwtController = require("../app/controller/jwtController")
const verifyToken = require("../app/http/middleware/verifyToken")
const adminCheckingController = require("../app/controller/adminCheckingController")
const verityAdmin = require("../app/http/middleware/verityAdmin")

// get methods 
client.get("/",  menuController().index)
client.get("/menus",  menuController().menus)
client.get("/menu/:id",  menuController().menu)
client.get("/category",  menuController().category)
client.get("/reviews",  reviewsController().index)
client.get("/carts", verifyToken,  cartController().carts)


// post methods 
client.post("/add-cart", cartController().addCart)
client.post("/add-menu", verifyToken, verityAdmin, menuController().addMenu)
client.put("/update-menu/:id", verifyToken, verityAdmin, menuController().updateMenu)
client.delete("/delete-menu/:id", verifyToken, verityAdmin, menuController().deleteMenu)
// delete methods 
client.delete("/cart/:id", verifyToken, cartController().deleteCart)




// user apies 
client.get("/users",verifyToken, verityAdmin, userController().index)
client.post("/add-user", userController().addUser)
client.delete("/delete-user/:id", userController().deleteUser)
client.put("/make-admin/:email", verifyToken, verityAdmin, userController().makeAdmin)


// admin checking api 
client.get("/is-admin", verifyToken, adminCheckingController().index)

// jwt 
client.post("/jwt", jwtController().index)

module.exports = client