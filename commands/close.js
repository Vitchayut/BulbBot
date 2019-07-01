const discord = require("discord.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    // ID Category.
    const categoryId = "595249774563950602";

    // If the message is in ticket channel then delete the channel other than sending a message.
    if (message.channel.parentID == categoryId) {

        message.channel.delete();

    } else {

        let embed = new Discord.RichEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setColor(config.red)
        .setDescription(`<:red_tick:566946004948090880> \`Please use this command in the ticket channel!\``)
        .setTimestamp()
        message.channel.send(embed);

    }

    var embedCloseTicket = new discord.RichEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setColor(config.green)
        .setDescription(`<:green_tick:566945998761361408> Your ticket is now marked as completed.`)
        .setFooter(`Ticket closed!`)
        .setTimestamp();

    // Find the channel for the logs.
    var logChannel = message.guild.channels.find(ch => ch.id === "576763739907293184");
    if (!logChannel) return message.channel.send(`:no_entry: \`Channel does not exist.\``);

    logChannel.send(embedCloseTicket);

}

module.exports.help = {
    name: "close"
}
