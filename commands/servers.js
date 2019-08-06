const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
    // DD/MM/YY format
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    // Lets define our array of guilds
    const guildArray = bot.guilds.map((guild) => {
    return `Guild Name • ${guild.name} : Guild ID • ${guild.id} : Owner • ${guild.owner.user.tag} : Server Created • ${day}.${month}.${year}`
    })

    // And send it
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)

}

module.exports.help = {
    name: "servers"
}
