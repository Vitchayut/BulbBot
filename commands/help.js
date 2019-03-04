const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

let dm = new Discord.RichEmbed()
    .setColor(`#409cd9`)
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(`:mailbox_with_mail: I have private messaged you a list of commands!`)
    .setTimestamp()
    message.channel.send(dm);
    
let helpembed = new Discord.RichEmbed()
    .setColor(`#409cd9`)
    .setAuthor(`Commands & Guides`, `https://cdn.discordapp.com/avatars/482795587045949440/c364a04cf589085867b25304c60abb26.png`)
    .addField(`:desktop: General Commands`, `!help - Show a list of commands & guides to your DM.\n!ping - Show the current bot ping/ms.\n!verify - Verify your discord account.`)
    .setTimestamp()
    message.author.send(helpembed);  

}
module.exports.help = {
  name: "help"
}
