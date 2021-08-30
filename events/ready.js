const roleClaim = require("../helpers/commands/role-claim");
module.exports = {
  name: "ready",
  async run(client, handler) {
    roleClaim(client);
  },
};
