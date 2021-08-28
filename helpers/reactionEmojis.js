const { rolAl } = require("../config/channelIDs");

const emojis = {
  javascript: "JavaScript",
  python: "Python",
  bash: "Bash",
  php: "PHP",
  go: "Go",
  c_lang: "C",
  java: "Java",
  cpp: "C++",
  html_css: "HTML & CSS",
  cs: "C#",
  react: "React",
  vue: "Vue",
  angular: "Angular",
  unity: "Unity",
  premiere_pro: "Premiere Pro",
  photoshop: "Photoshop",
  illustrator: "Illustrator",
  after_effects: "After Effects",
  blender: "Blender",
};

module.exports = {
  emojis,

  getEmoji: (client, emojiName) =>
    client.emojis.cache.find(emoji => emoji.name === emojiName),

  handleReaction: (reaction, user, add) => {
    if (reaction.message.channel.id === rolAl) {
      if (user.id === "880703719702945813") return;

      const emoji = reaction._emoji.name;

      const roleName = emojis[emoji];
      if (!roleName) return;

      const { guild } = reaction.message;

      const role = guild.roles.cache.find(role => role.name === roleName);

      const member = guild.members.cache.find(member => member.id === user.id);

      if (add) {
        member.roles.add(role);
      } else {
        member.roles.remove(role);
      }
    }
  },
};
