const { rolAl, sohbet, kurallar } = require("../channelIDs");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "guildMemberAdd",
  async run(client, handler, member) {
    const welcomeEmbed = new MessageEmbed()
      .setColor("#C62431")
      .setTitle(`Welcome ${member.displayName}  🎉`)
      .setDescription(
        `<@${member.id}>,**Developer Box sunucusuna hoş geldin!** 🎉

      <#${kurallar}> **kanalından kurallarımızı okumayı unutma!** 🔔

      <#${rolAl}> **kanalından ilgi duyduğun konular hakkında roller alabilirsin.**,
       `
      )
      .setImage(
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Welcome-31.gif"
      )

      .setTimestamp();

    client.channels
      .fetch(sohbet)
      .then(channel => channel.send({ embed: welcomeEmbed }));
  },
};
