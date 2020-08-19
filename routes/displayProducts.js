const productsDB = require("../productsDB.js");
const product = productsDB.getModel();

module.exports = async (req, res, next) => {
  let products = await product.find({});

  let results = products.map((item) => {
    return {
      id: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      quantity: item.quantity,
    };
  });

  res.render("displayProductsView", {
    title: "List of Products",
    data: results,
  });
};
