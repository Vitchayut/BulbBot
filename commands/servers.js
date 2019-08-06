const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
    // Lets define our array of guilds
    const guildArray = bot.guilds.map((guild) => {
    return `Guild Name • ${guild.name} : Guild ID • ${guild.id} : Owner • ${guild.owner.user.tag} : Server Created • ${guild.createdAt.getDate()}.${guild.createdAt.getMonth() + 1}.${guild.createdAt.getFullYear()}`
    })

    // And send it
    console.log(`\`\`\`${guildArray.join("\n")}\`\`\``)

}

module.exports.help = {
    name: "servers"
}
