const {ObjectId} = require("mongodb")
const MenuModel = require("../models/MenuSchema")
const menuController = () => {
    return {
        index (req, res) {
            res.send("this server is running")
        },
        async menus(req, res) {
           const result = await MenuModel.find()
           res.send(result)
        },
        async category(req, res) {
            const categoryName = req.query.category
            const result = await MenuModel.find({category: categoryName})
            res.send(result)
        },
        async menu(req, res) {
            const id = req.params.id
            const result = await MenuModel.findOne({_id: new ObjectId(id)})
            res.send(result)
        }
    }
}

module.exports = menuController