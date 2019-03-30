const Discord = require("discord.js");
const HypixelAPI = require('hypixel-api')
const client = new HypixelAPI('327aaf6b-0d25-47bb-bb70-ce3309c6aea0')

module.exports.run = async (bot, message, args) => {

let user = args.slice(0).join(" ");

client.getPlayer('name', user).then((player) => {
    console.log(player)
}).catch((err) => {
    console.error('Error! ' + err)
})
    
    let embed = new Discord.RichEmbed()
    .setTitle('Player: ' + '_ItsNuaZ')
    message.channel.send(embed)

}

module.exports.help = {
  name: "hypixel"
}
