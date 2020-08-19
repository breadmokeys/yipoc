const productsDB = require("../productsDB.js");
const product = productsDB.getModel();
let ObjectId = require("mongodb").ObjectId;
const cartDB = require("../cartDB.js");
const carts = cartDB.getModel();

module.exports = async (req, res, next) => {
  let products = await product.find({});

  let resultsP = products.map((item) => {
    return {
      id: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      quantity: item.quantity,
    };
  });

  let cart = await carts.find({});

  let resultsC = [];

  let results = cart.map(async (temp) => {
    let item = await product.find({ _id: new ObjectId(temp.pid) });
    item = item[0];
    resultsC.push({
      pid: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      quantity: temp.quantity,
    });
    return {
      pid: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      quantity: temp.quantity,
    };
  });

  Promise.all(results).then(() => {
    res.render("displayCartView", {
      title: "List of Products for cart",
      dataP: resultsP,
      dataC: resultsC,
      json: JSON.stringify({ products: resultsC }),
    });
  });
};
