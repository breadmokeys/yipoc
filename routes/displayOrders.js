const ordersDB = require("../ordersDB.js");
const order = ordersDB.getModel();
const productsDB = require("../productsDB.js");

module.exports = async (req, res, next) => {
  let orders = await order.find({});

  let temp = [];
  let resultsNew;

  let results = orders.map((item) => {
    resultsNew = item.products.map(async (item) => {
      temp.push({
        id: item.pid,
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: item.quantity,
      });
      return {
        id: item.pid,
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: item.quantity,
      };
    });
    return {
      id: item._id,
      products: item.products,
    };
  });

  Promise.all(resultsNew).then(() => {
    res.render("displayOrdersView", {
      title: "List of Orders",
      data: orders,
    });
  });
};
