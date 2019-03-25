const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setColor(config.red)
        .setDescription(`<:poll_disagree:437529095065174020> \`Insufficient Permissions!\`\n<a:Question:521253226754867224> \`Required: ${perm}\``, true);

    message.channel.send(embed).then(m => m.delete(8000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setColor(config.red)
        .setDescription(`<:poll_disagree:437529095065174020> ${user} \`have moderator permissions!\``, `<a:Question:521253226754867224> \`Permission: ${perms}\``);

    message.channel.send(embed).then(m => m.delete(8000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setAuthor('Error!', 'https://freeiconshop.com/wp-content/uploads/edd/error-flat.png')
        .setDescription("<:poll_disagree:437529095065174020> \`You cannot ban a bot!\`")
        .setColor(config.red);

    message.channel.send(embed).then(m => m.delete(8000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setAuthor('Error!', 'https://freeiconshop.com/wp-content/uploads/edd/error-flat.png')
        .setDescription("<:poll_disagree:437529095065174020> \`Could not find that user.\`")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(8000));
}

module.exports.cantfindUserID = (channel) => {
    let embed = new Discord.RichEmbed()
        .setAuthor('Error!', 'https://freeiconshop.com/wp-content/uploads/edd/error-flat.png')
        .setDescription("<:poll_disagree:437529095065174020> \`Could not find that user.\`\n<a:Question:521253226754867224> \`Please enter a User ID to unban.\`")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(8000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setAuthor('Error!', 'https://freeiconshop.com/wp-content/uploads/edd/error-flat.png')
        .setDescription("<:poll_disagree:437529095065174020> \`Please supply a reason.\`")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(8000));
}

module.exports.onlyOwner = (message) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setDescription("<:poll_disagree:437529095065174020> Only <@346102251632197632> can execute this command!");

    message.channel.send(embed).then(m => m.delete(8000));
}

module.exports.onlyDonator = (message) => {
    let embed = new Discord.RichEmbed()
        .setColor(config.red)
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setDescription("<:poll_disagree:437529095065174020> Only donators can execute this command!");

    message.channel.send(embed).then(m => m.delete(8000));
}
