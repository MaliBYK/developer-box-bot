const fs = require("fs");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "help",
  aliases: ["help", "yardım", "h"],
  category: "help",
  cooldown: 1,
  async run({ client, handler, message, args }) {
    const subMenuItems = [];
    const menuItems = [];

    try {
      const files = fs.readdirSync("./commands");
      for (const file of files) {
        if (fs.statSync(`./commands/${file}`).isDirectory()) {
          const subFiles = fs.readdirSync(`./commands/${file}`);
          let subCommands = subFiles.map(subFile => {
            const commandName = subFile.split(".")[0];
            return `${process.env.PREFIX}${commandName}`;
          });
          if (args[0]?.toLowerCase() === file.toLowerCase()) {
            let subCommands = subFiles.map(subFile => {
              const commandName = subFile.split(".")[0];
              const subContent = require(`./${file}/${commandName}`);
              return [
                `${process.env.PREFIX}${commandName}`,
                subContent.description,
              ];
            });
            subMenuItems.push([file, subCommands]);
          }
          menuItems.push([file, subCommands]);
        } else {
        }
      }
    } catch (err) {
      console.error(err);
    }
    const helpEmbed = new MessageEmbed()
      .setColor("#C62431")
      .setAuthor("DB BOT")
      .setFooter(`${message.member.displayName} tarafından istendi`)
      .setTimestamp();

    if (subMenuItems.length > 0) {
      helpEmbed.setTitle(`__${subMenuItems[0][0]}__`);
      subMenuItems[0][1].map(command => {
        helpEmbed.addField(command[0], "`" + command[1] + "`", true);
      });
    } else if (menuItems.length > 0) {
      helpEmbed
        .setTitle("Developer Box Bot")
        .setURL("https://developer-box.vercel.app")
        .setDescription(
          `**${process.env.PREFIX}yardım**,ile yardım alabilirsiniz.
      **${process.env.PREFIX}yardım <Kategori Adı>** ile detaylı yardım alabilirsiniz.
      
      __**KATEGORİLER**__
      `
        );
      menuItems.map(category => {
        helpEmbed.addField(
          `__${category[0]}__`,
          "`" + category[1].join(" ") + "`"
        );
      });
    }
    message.channel.send({ embed: helpEmbed });
  },
};
