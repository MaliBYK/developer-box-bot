const { handleReaction } = require("../helpers/reactionEmojis");
module.exports = {
  name: "messageReactionAdd",
  async run(client, handler, reaction, user) {
    handleReaction(reaction, user, true);
  },
};
