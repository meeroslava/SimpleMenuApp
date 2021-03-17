const mongoose = require("mongoose");
const RestaurantSchema = new mongoose.Schema({
  name: String,
  menu: {
    name: String,
    details: [{ dish: String, price: Number }],
  },
});
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;
