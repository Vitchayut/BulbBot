const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
    if (message.author.id !== "263233275479195648") return message.reply(`:no_entry: \`No permission to use this command!\``);
    // Lets define our array of guilds
    const guildArray = bot.guilds.map((guild) => {
    return `Name • ${guild.name}\nID • ${guild.id}\nOwner • ${guild.owner.user.tag}\nCreated • ${guild.createdAt.getDate()}.${guild.createdAt.getMonth() + 1}.${guild.createdAt.getFullYear()}\n====================================================================================================`
    })

    // And send it
    console.log(`${guildArray.join("\n")}`);
    message.reply(`<:green_tick:566945998761361408> \`Check the console log for info!\``);

}

module.exports.help = {
    name: "servers"
}
