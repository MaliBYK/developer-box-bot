const roleClaim = require("../helpers/role-claim");
module.exports = {
  name: "ready",
  async run(client, handler) {
    roleClaim(client);
  },
};
