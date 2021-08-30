const { MessageEmbed } = require("discord.js");
const basicEmbedGenerator = (color, title, desc, footer) => {
  const embed = new MessageEmbed()
    .setColor(color)
    .setTitle(title)
    .setDescription(desc)
    .setFooter(
      `Developer Box | ${footer}`,
      "https://i.postimg.cc/9QYJ1Txk/1-1.png"
    );
  return embed;
};
module.exports = basicEmbedGenerator;
