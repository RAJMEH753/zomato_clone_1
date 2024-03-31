const Mealtype = require("../Model/mealtypeDB");

exports.getMealtype = (req, res) => {
    
    Mealtype.find()
        .then(response => {
            res.status(200).json({
                message: "Mealtype Fetched Successfully",
                meal: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getMealtypeById = (req, res) => {

    const { mealId } = req.params;
    
    Mealtype.findById(mealId)
        .then(response => {
            res.status(200).json({
                message: "Meal By Id Fetched Successfully",
                mealtype: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}