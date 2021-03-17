const Restaurant = require("../models/restaurant.model");

exports.get = function (req, res) {
  console.log(req.params.id);
  Restaurant.findById(req.params.id)
    .then(function (restaurant) {
      return res.status(200).json(restaurant);
    })
    .catch(function (err) {
      return res.status(400).json({
        status: 400,
        message: err.message,
      });
    });
};

exports.list = function (req, res) {
  //console.log(Restaurant.collection.collectionName);
  Restaurant.find({ "menu.details.1": { $exists: true } }) //get restaurants with menus
    .then(function (restaurants) {
      return res.status(200).json(restaurants);
    })
    .catch(function (err) {
      return res.status(400).json({
        status: 400,
        message: err.message,
      });
    });
};
