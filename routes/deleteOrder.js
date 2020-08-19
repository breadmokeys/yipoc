const ordersDB = require("../ordersDB.js");
const order = ordersDB.getModel();
let ObjectId = require("mongodb").ObjectId;

module.exports = async (req, res, next) => {
  (async () => {
    await order.deleteOne({ _id: new ObjectId(req.params.id) });
  })();

  res.redirect("/users");
};
