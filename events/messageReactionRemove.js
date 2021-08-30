const { handleReaction } = require("../helpers/commands/reactionEmojis");
module.exports = {
  name: "messageReactionRemove",
  async run(client, handler, reaction, user) {
    handleReaction(reaction, user, false);
  },
};
