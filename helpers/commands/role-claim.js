const { getRole } = require("../../config/channelIDs");
const firstMessage = require("./first-message");
const { emojis, getEmoji } = require("./reactionEmojis");
module.exports = client => {
  let emojiText = `**İlgilendiğiniz rolleri almak için emojisine tıklayın.**\n`;
  const reactions = [];
  for (const key in emojis) {
    const emoji = getEmoji(client, key);
    reactions.push(emoji);
    const role = emojis[key];
    emojiText += `**${emoji}** = **${role}**
`;
  }
  firstMessage(client, getRole, emojiText, reactions);
};
