const express = require("express");
const RestaurantCtrl = require("../controllers/restaurant.controller");

const router = express.Router();

router.get("/", RestaurantCtrl.list);
router.get("/:name", RestaurantCtrl.get);
router.post("/:name/post", RestaurantCtrl.update);
router.get("/:name/edit", RestaurantCtrl.get);

module.exports = router;
