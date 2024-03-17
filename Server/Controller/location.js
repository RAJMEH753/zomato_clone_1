const Location = require("../Model/locationDB");

exports.getLocation = (req, res) => {
    
    Location.find()
        .then(response => {
            res.status(200).json({
                message: "Location Fetched Successfully",
                location: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}