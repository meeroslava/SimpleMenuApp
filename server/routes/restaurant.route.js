const express = require("express");
const RestaurantCtrl = require("../controllers/restaurant.controller");

const router = express.Router();
const menuRouter = express.Router({ mergeParams: true });

router.get("/", RestaurantCtrl.list);
router.get("/:id", RestaurantCtrl.get);
router.post("/:id/post", RestaurantCtrl.update);
router.get("/:id/edit", RestaurantCtrl.get);

module.exports = router;
