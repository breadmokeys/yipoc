const usersDB = require("./usersDB.js");

const productsDB = require("./productsDB.js");

const cartDB = require("./cartDB.js");
const ordersDB = require("./ordersDB.js");

const user = usersDB.getModel();

const product = productsDB.getModel();

const cart = cartDB.getModel();

const orders = ordersDB.getModel();

(async () => {
  await user.deleteMany({});
  await product.deleteMany({});
  await cart.deleteMany({});
  await orders.deleteMany({});

  let user1 = new user({
    name: "John",
    role: "Customer",
  });

  let product1 = new product({
    name: "Iphone",
    description: "Iphone XS",
    price: "1000",
    quantity: "10",
  });

  let product2 = new product({
    name: "Ipad",
    description: "Ipad mini",
    price: "500",
    quantity: "10",
  });

  await Promise.all([user1.save(), product1.save(), product2.save()]);

  process.exit();
})();
