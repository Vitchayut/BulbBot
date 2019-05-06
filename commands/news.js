const Discord = require("discord.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

let newsembed = new Discord.RichEmbed()
.setAuthor(message.member.displayName, message.author.displayAvatarURL)
.setColor(config.blue)
.addField(`Title`, `Description`, true)
.setThumbnail(config.ownerURL)
.setTimestamp()
message.channel.send(newsembed);

}

module.exports.help = {
  name: "news"
}
