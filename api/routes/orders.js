const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const Order = require("../models/order");
const Product = require("../models/product");
const checkAuth = require("../middleware/check-auth");
const OrdersController = require("../controllers/orders");

router.get("/",  OrdersController.orders_get_all);

router.post("/", checkAuth, OrdersController.orders_post_all);

router.get("/:orderID",  OrdersController.orders_get_orders);

router.delete("/:orderID", checkAuth, OrdersController.orders_delete_all);

module.exports = router;
