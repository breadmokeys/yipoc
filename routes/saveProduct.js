const productsDB = require("../productsDB.js");
const product = productsDB.getModel();

module.exports = async (req, res, next) => {
  (async () => {
    let product1 = new product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
    });

    await Promise.all([product1.save()]);
  })();

  res.redirect("/products");
};
