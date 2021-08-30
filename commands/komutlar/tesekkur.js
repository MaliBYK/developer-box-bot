const basicEmbedGenerator = require("../../helpers/embeds/basicEmbed");
const User = require("../../models/User");
const { thankLeadboard } = require("../../config/channelIDs");
module.exports = {
  name: "Teşekkür",
  aliases: [
    "tesekkur",
    "teşekkür",
    "Teşekkürler",
    "thanks",
    "thank",
    "Thank",
    "teşekkürler",
  ],
  description: "Biri size yardım ettiği zaman teşekkür edin.",
  category: "komutlar",
  cooldown: 6 * 60 * 60,
  async run({ client, handler, message, args }) {
    const thankTo = message.mentions.members.first();
    if (!thankTo)
      return message.channel.send(
        "**Lütfen teşekkür edilecek kişiyi etiketleyin!**"
      );
    if (thankTo.user.bot)
      return message.channel.send("**Bir bota teşekkür edemezsin!**");
    if (thankTo.user.id === message.author.id)
      return message.channel.send("**Kendine teşekkür edemezsin!**");

    const guildID = thankTo.guild.id;
    const userID = thankTo.user.id;

    const user = await User.findOneAndUpdate(
      {
        userID,
        guildID,
      },
      {
        $inc: { thankCount: 1 },
      },
      {
        new: true,
        upsert: true,
      }
    );

    console.log(user);

    const thankEmbed = basicEmbedGenerator(
      "#C62431",
      `Teşekkürler ${thankTo.displayName}!`,
      `**${message.member.displayName}** teşekkürlerini sundu. 
       ** ${thankTo.displayName} ** , toplam __**${user.thankCount}**__ teşekkürün var . burdan kontrol edin **<#${thankLeadboard}>** `,
      "Teşekkür Mesajı"
    );
    message.channel.send({ embed: thankEmbed });
  },
};
