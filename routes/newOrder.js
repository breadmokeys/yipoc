const oredersDB = require("../ordersDB.js");
const order = oredersDB.getModel();
const productsDB = require("../productsDB.js");
const product = productsDB.getModel();
let ObjectId = require("mongodb").ObjectId;
const cartDB = require("../cartDB.js");
const cart = cartDB.getModel();

module.exports = async (req, res, next) => {
  (async () => {
    let temp = JSON.parse(req.query.products);
    let order1 = new order({
      products: temp.products,
    });

    await Promise.all([order1.save()]);

    let results = temp.products.map(async (item) => {
      let myProd = await product.find({ _id: new ObjectId(item.id) });
      myProd = myProd[0];
      await product.updateOne(
        { _id: new ObjectId(item.id) },
        {
          name: item.name,
          description: item.description,
          price: item.price,
          quantity: parseInt(myProd.quantity, 10) - parseInt(item.quantity, 10),
        }
      );
    });

    await cart.deleteMany({});

    Promise.all(results).then(() => {
      res.redirect("/cart");
    });
  })();
};
