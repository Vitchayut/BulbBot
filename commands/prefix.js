const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "Administrator");
  if(!args[0] || args[0 == "help"]) return message.reply(`:no_entry: \`Usage: !prefix <desired prefix here>\``);

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor(config.blue)
  .setTimestamp()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .setTitle(`:pencil: New changes to the bot's prefix!`)
  .setDescription(`Set to ${args[0]}\n__**NOTICE:**__ This feature is currently resetting back to the default prefix after every 24 hours.`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}
