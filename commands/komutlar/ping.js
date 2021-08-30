module.exports = {
  name: "ping",
  aliases: ["p"],
  description: "ping the server",
  category: "komutlar",
  cooldown: 10,
  async run({ client, handler, message, args }) {
    message.channel.send(`${client.ws.ping}ms`);
  },
};
