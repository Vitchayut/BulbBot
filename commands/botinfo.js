const Discord = require("discord.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let bname = bot.user.username;
    let botembed = new Discord.RichEmbed()
    .setColor(`#07fccb`)
    .setThumbnail(bicon)
    .setAuthor(bname, bicon)
    .setURL(`https://discord.gg/NeAvnzq`)
    .setTimestamp()
    .setTitle(`Click here to join our discord server!`)
    .setDescription("<:js:512247624490024986> Made with Node.js and Discord.js <:discordjs:553157782652715009>\n<:Heroku:553158576458432523> Hosted by Heroku.")
    .setFooter(`Made by _ItsNuaZ#3977 & Vitchayut#8695`, `https://cdn.discordapp.com/avatars/346102251632197632/b92c95190ff53e40c396104534d71f75.png`)
    .addField(`:clipboard: Created by`, `_ItsNuaZ#3977 & vITCHAYUT#8695`, true)
    .addField(`:information_source: Version`, `${config.version}`, true)
    .addField(`:tools: Debug`, `New update to version ${config.version}!, alot of stuff have been changed and improved. :D`)
    .setTimestamp();

    message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
