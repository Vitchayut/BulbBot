const Discord = require("discord.js");

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
    .setDescription("<:js:512247624490024986> Made with Node.js and Discord.js")
    .setFooter(`Made by _ItsNuaZ#3977 | Made with Node.js and Discord.js!`, `https://cdn.discordapp.com/attachments/475515176070807554/485755761549508621/nzkgalaxy.png`)
    .addField(`:clipboard: Created by`, `_ItsNuaZ#3977`, true)
    .addField(`:information_source: Version`, `0.2.2b`, true)
    .addField(`:tools: Debug`, `new update to version 0.2.2b! , alot of stuff changed and improved :D`);

    message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
