const productsDB = require("../productsDB.js");
const product = productsDB.getModel();
let ObjectId = require("mongodb").ObjectId;

module.exports = async (req, res, next) => {
  (async () => {
    let objID = new ObjectId(req.body.id);

    await product.deleteOne({ _id: objID });
  })();

  res.redirect("/products");
};
