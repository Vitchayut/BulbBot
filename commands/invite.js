const Discord = require("discord.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(config.blue)
    .setTimestamp()
    .setAuthor(message.member.displayName, message.author.displayAvatarURL)
    .setDescription(`<a:righter_arrow:518744759506960406> **Want to invite me to your server?** <a:lefter_arrow:518744793489342464>\n<:green_tick:566945998761361408> [**Click here to invite me to your server!**](https://discordapp.com/api/oauth2/authorize?client_id=482795587045949440&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize&scope=bot)`);
    message.channel.send(embed);
    
}

module.exports.help = {
  name: "invite"
}
