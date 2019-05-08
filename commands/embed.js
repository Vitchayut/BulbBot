const Discord = require("discord.js");
const errors = require("../utils/errors.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

if(args[0] == "rules"){
  await message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
  let botmessage = args.slice(1).join(" ");
  let botembed = new Discord.RichEmbed()
  .setColor(config.gold)
  .setTimestamp()
  .addField("__**:clipboard: Rules**__", botmessage, true)
  message.channel.send(botembed);
  return;
}

if(args[0] == "announce"){
  await message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
  let botmessage = args.slice(1).join(" ");
  let day = message.createdAt.getDate()
  let month = 1 + message.createdAt.getMonth()
  let year = message.createdAt.getFullYear()
  let botembed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setColor(config.blue)
  .setTimestamp()
  .addField(`**:loudspeaker: Announcement - [${month}/${day}/${year}] <a:wave:512259019386126337>**`, botmessage, true)
  message.channel.send(botembed);
  return;
}

if(args[0] == "default"){
  await message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
  let botmessage = args.slice(1).join(" ");
  let botembed = new Discord.RichEmbed()
  .setColor(config.blue)
  .setTimestamp()
  .setDescription(botmessage)
  message.channel.send(botembed);
  return;
}

if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
let commandusage = new Discord.RichEmbed()
.setAuthor(message.member.displayName, message.author.displayAvatarURL)
.setColor(config.gold)
.addField(`:loudspeaker: \`Categories:\``, `\`default\nannounce\nrules\``, true)
.addField(`:loudspeaker: \`Usage:\``, `\`!embed <category> <message>\`\n<@${message.author.id}>`, true)
.setTimestamp()
message.channel.send(commandusage);

}

module.exports.help = {
  name: "embed"
}
