const Discord = require("discord.js");
const HypixelAPI = require('hypixel-api')
const client = new HypixelAPI('327aaf6b-0d25-47bb-bb70-ce3309c6aea0')

module.exports.run = async (bot, message, args) => {

client.getPlayer('name', 'Ethanent').then((player) => {
    console.log(player)
}).catch((err) => {
    console.error('Error! ' + err)
})

}

module.exports.help = {
  name: "hypixel"
}
