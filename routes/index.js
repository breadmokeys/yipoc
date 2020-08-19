let express = require("express");
let router = express.Router();

let displayProducts = require("./displayProducts");
let addProduct = require("./addProduct");
let saveProduct = require("./saveProduct");
let editProduct = require("./editProduct");
let saveProductAfterEdit = require("./saveProductAfterEdit");
let deleteProduct = require("./deleteProduct");
let deleteProductAfterConfirm = require("./deleteProductAfterConfirm");

let displayCart = require("./displayCart");
let addToCart = require("./addToCart");
let remmoveFromCart = require("./removeFromCart");

let newOrder = require("./newOrder");
let displayOrders = require("./displayOrders");
let deleteOrder = require("./deleteOrder");

let displayUsers = require("./displayUsers");

// router specs
router.get("/", function (req, res, next) {
  res.redirect("/cart");
});

router.get("/products", displayProducts);

router.get("/products/add", addProduct);
router.post("/products/add", saveProduct);

router.get("/products/edit/:id", editProduct);
router.post("/products/edit/", saveProductAfterEdit);

router.get("/products/delete/:id", deleteProduct);
router.post("/products/delete", deleteProductAfterConfirm);

router.get("/cart", displayCart);
router.get("/cart/add/:id", addToCart);
router.get("/cart/delete/:id", remmoveFromCart);

router.get("/orders/new", newOrder);
router.get("/orders/:id", displayOrders);
router.get("/orders/delete/:id", deleteOrder);

router.get("/users", displayUsers);

module.exports = router;
