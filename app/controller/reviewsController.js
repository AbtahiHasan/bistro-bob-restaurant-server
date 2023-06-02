const ReviewModel = require("./../models/reviewSchema")
const reviewsController = () => {
    return {
        async index(req, res) {
            const result = await ReviewModel.find()
            res.send(result)
        }
    }
};

module.exports = reviewsController;