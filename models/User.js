const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userID: {
    type: String,
    required: [true, "userID must be provided"],
  },
  guildID: {
    type: String,
    required: [true, "guildID must be provided"],
  },

  thankCount: { type: Number, default: 0 },

  devCoins: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", UserSchema);
