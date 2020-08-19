const productsDB = require("../productsDB.js");
const product = productsDB.getModel();
let ObjectId = require("mongodb").ObjectId;

module.exports = async (req, res, next) => {
  console.log(req.body.id);
  (async () => {
    let objID = new ObjectId(req.body.id);

    await Promise.all([
      product.updateOne(
        { _id: objID },
        {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          quantity: req.body.quantity,
        }
      ),
    ]);
  })();

  res.redirect("/products");
};
