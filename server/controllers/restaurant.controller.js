const Restaurant = require("../models/restaurant.model");

exports.get = function (req, res) {
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

exports.update = function (req, res) {
  const params = JSON.parse(JSON.stringify(req.body));
  Restaurant.findByIdAndUpdate(
    req.params.id,
    { menu: params },
    { new: true },
    function (err) {
      if (err) {
        console.log("error: ", err);
      }
    }
  );
};
