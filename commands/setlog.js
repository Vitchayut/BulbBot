const Discord = require("discord.js");
/**const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});
const Log = require("../models/log.js");
const fs = require("fs");**/
const errors = require("../utils/errors.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "Administrator");
  
  let disabledEmbed = new Discord.RichEmbed()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .setColor(config.red)
  .setTimestamp()
  .setDescription(`<:red_tick:566946004948090880> \`This feature is currently disabled due to bugs!\``);
  message.reply(disabledEmbed);
  
  /**let errorembed = new Discord.RichEmbed()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .setColor(config.red)
  .setTimestamp()
  .setDescription(`<:red_tick:566946004948090880> \`Usage: !setlog\``);
  if(!args[0] || args[0 == "help"]) return message.reply(errorembed);**/
  
  /**let logEmbed = new Discord.RichEmbed()
  .setColor(config.green)
  .setTimestamp()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .setDescription(`<:green_tick:566945998761361408> \`New logs-channel set!\`\n:pencil: \`Set to\` <#${message.channel.id}>`);

  message.channel.send(logEmbed);
  
  const log = new Log({
      guildID: message.guild.id,
      channelID: message.channel.id
  });
  
  log.save()
  .then(result => console.log(result))
  .catch(err => console.log(err));**/
  
}

module.exports.help = {
  name: "setlog"
}
