const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
    // Lets define our array of guilds
    const guildArray = bot.guilds.map((guild) => {
    return `Name • ${guild.name}\nID • ${guild.id}\nOwner • ${guild.owner.user.tag}\nCreated • ${guild.createdAt.getDate()}.${guild.createdAt.getMonth() + 1}.${guild.createdAt.getFullYear()}\n====================================================================================================`
    })

    // And send it
    console.log(`${guildArray.join("\n")}`)

}

module.exports.help = {
    name: "servers"
}
