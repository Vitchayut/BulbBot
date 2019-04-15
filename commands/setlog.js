const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "Administrator");
  let errorembed = new Discord.RichEmbed()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .setColor(config.red)
  .setTimestamp()
  .setDescription(`<:red_tick:566946004948090880> \`Usage: --setlog <channel>\``);
  if(!args[0] || args[0 == "help"]) return message.reply(errorembed);

  let rcs = JSON.parse(fs.readFileSync("./rcs.json", "utf8"));
  rcs[message.guild.id] = {
    rc: message.mentions.channels.first().name
  };

  fs.writeFile("./rcs.json", JSON.stringify(rcs), (err) => {
    if (err) console.log(err)
  });

  let rcEmbed = new Discord.RichEmbed()
  .setColor(config.green)
  .setTimestamp()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .setDescription(`<:green_tick:566945998761361408> \`New logs-channel set!\`\n\`Set to\` ${args[0]}`);

  message.channel.send(rcEmbed);
  delete require.cache[require.resolve(`../rcs.json`)];
  
}

module.exports.help = {
  name: "setlog"
}
