const restaurantRouter = require("./restaurant.route");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("API works!");
});

router.use("/restaurants", restaurantRouter);
module.exports = router;
