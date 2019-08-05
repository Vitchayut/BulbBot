const mongoose = require("mongoose");

const logSchema = mongoose.Schema({
  guildID: String,
  channelID: String
  
})

module.exports = mongoose.model("Log", logSchema);
