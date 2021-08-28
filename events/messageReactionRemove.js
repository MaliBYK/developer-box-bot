const { handleReaction } = require("../helpers/reactionEmojis");
module.exports = {
  name: "messageReactionRemove",
  async run(client, handler, reaction, user) {
    handleReaction(reaction, user, false);
  },
};
