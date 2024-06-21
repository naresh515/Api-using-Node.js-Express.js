const express = require("express");

const router = express.Router();

const Product = require("../models/product");
const mongoose = require("mongoose");
const product = require("../models/product");
const multer = require("multer");
const checkAuth = require("../middleware/check-auth");
const ProductsController = require("../controllers/products");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.get("/", ProductsController.products_get_all);

router.post(
  "/",
  checkAuth,
  upload.single("productImage"),
  ProductsController.products_post_all
);

router.get("/:productID", ProductsController.products_get_product);

router.patch("/:productID", checkAuth, ProductsController.product_update_all);

router.delete("/:productID", checkAuth, ProductsController.products_delete_all);

module.exports = router;
