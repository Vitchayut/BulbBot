const Discord = require("discord.js");
const HypixelAPI = require('hypixel-api')
const client = new HypixelAPI(hypixelapitoken)

module.exports.run = async (bot, message, args) => {

let user = args.slice(0).join(" ");

client.getPlayer('name', user).then((player.displayname) => {
    console.log(player.displayname)
    message.reply(player.displayname)
}).catch((err) => {
    console.error('Error! ' + err)
    message.channel.send(`:no_entry: \`Usage: !player <name>\``)
})

}

module.exports.help = {
  name: "hypixel"
}
