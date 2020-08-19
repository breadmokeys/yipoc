const productsDB = require("../productsDB.js");
const product = productsDB.getModel();

const cartDB = require("../cartDB.js");
const cart = cartDB.getModel();

module.exports = async (req, res, next) => {
  (async () => {
    let products = await cart.find({ pid: req.params.id });

    let quantity = 1;

    if (products && products.length > 0) {
      quantity = parseInt(products[0].quantity, 10) - 1;
      await Promise.all([
        cart.updateOne({ pid: req.params.id }, { quantity: quantity }),
      ]);
    } else {
      let cart1 = new cart({
        pid: req.params.id,
        quantity: quantity,
      });
      await Promise.all([cart1.save()]);
    }
  })();

  res.redirect("/cart");
};
