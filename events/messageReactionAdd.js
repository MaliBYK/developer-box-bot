const { handleReaction } = require("../helpers/commands/reactionEmojis");
module.exports = {
  name: "messageReactionAdd",
  async run(client, handler, reaction, user) {
    handleReaction(reaction, user, true);
  },
};
