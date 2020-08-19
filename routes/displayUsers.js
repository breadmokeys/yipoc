const usersDB = require("../usersDB.js");
const user = usersDB.getModel();

module.exports = async (req, res, next) => {
  let users = await user.find({});

  let results = users.map((item) => {
    return {
      id: item._id,
      name: item.name,
    };
  });

  res.render("displayUsersView", {
    title: "List of Users",
    data: results,
  });
};
