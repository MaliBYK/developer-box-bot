module.exports = {
  name: "test",
  aliases: ["p"],
  description: "test komutu",
  category: "Utils",
  cooldown: 10,
  async run({ client, handler, message, args }) {
    message.channel.send(`test 123`);
  },
};
