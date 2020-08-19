const productsDB = require("../productsDB.js");
let ObjectId = require("mongodb").ObjectId;
const products = productsDB.getModel();

module.exports = async (req, res, next) => {
  let objID = new ObjectId(req.params.id);

  let product = await products.find({ _id: objID });

  let result = {
    name: product[0].name,
    description: product[0].description,
    price: product[0].price,
    quantity: product[0].quantity,
    id: req.params.id,
  };

  res.render("editProductsView", { data: result });
};
