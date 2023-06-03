const { ObjectId } = require("mongodb");
const cartModel = require("./../models/cartsSchema")

const cartController = () => {
    return {
        async carts (req, res) {
           const email = req.query.email
           console.log(req.decoded)
        //    if(req.decoded.email !== email) {
        //     return res.status(403).send({error: true, message: "forbidden access"})
        //    }
           const result = await cartModel.find({email: email})
           res.send(result)
        },
        async addCart (req, res) {
            const cartData = req.body
            console.log(cartData)
            const cart = new cartModel({
                menu_id: cartData._id,
                image: cartData.image,
                item_name : cartData.name,
                price: cartData.price,
                email: cartData.email
            })
            const result = await cart.save()
            res.send(result)
        },
        async deleteCart (req, res) {
           const id = req.params.id
           const result = await  cartModel.deleteOne({_id: new ObjectId(id)})
           res.send(result)
        }
    }
};

module.exports = cartController;