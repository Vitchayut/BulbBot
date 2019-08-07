const Discord = require("discord.js");
let config = require("../botconfig.json");

module.exports.run = (bot, message, args) => {
    if (message.author.id !== "346102251632197632") return message.reply(`:no_entry: \`No permission to use this command!\``);
    // Embed text
    let botmessage = args.slice(0).join(" ");
    let botembed = new Discord.RichEmbed()
    .setAuthor(`Announcement from _ItsNuaZ`, message.author.displayAvatarURL)
    .setColor(config.blue)
    .setTimestamp()
    .setDescription(botmessage)
    // Lets define our array of guilds
    var guildList = client.guilds.array();
        try {
            guildList.forEach(guild => guild.defaultChannel.send(botembed));
        } catch (err) {
            console.log("Could not send message to " + guild.name);
    }

    // And send it
    message.reply(`<:green_tick:566945998761361408> \`Successfully sent a message to all the guilds!\``);

}

module.exports.help = {
    name: "guildmessage"
}
