const Discord = require("discord.js");
const HypixelAPI = require('hypixel-api')
const client = new HypixelAPI('327aaf6b-0d25-47bb-bb70-ce3309c6aea0')

module.exports.run = async (bot, message, args) => {

let user = args.slice(0).join(" ");
let hypixelPlayer = (await HypixelClient.getPlayer('name', user).player

//client.getPlayer('name', user).then((player) => {
//    console.log(player)
//}).catch((err) => {
//    console.error('Error! ' + err)
//})    
let playerembed = new Discord.RichEmbed()
.setTitle('Player: ' + hypixelPlayer.displayname)
.setTimestamp()
message.channel.send(playerembed);

}

module.exports.help = {
  name: "hypixel"
}
