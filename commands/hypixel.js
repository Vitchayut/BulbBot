const Discord = require("discord.js");
const HypixelAPI = require('hypixel-api')
const client = new HypixelAPI('327aaf6b-0d25-47bb-bb70-ce3309c6aea0')

module.exports.run = async (bot, message, args) => {

let user = args.slice(0).join(" ");

try {  
	hypixelPlayer = client.getPlayer(`name`, user).player
}
catch (err) {
	console.log(err)
	return
}

let playerembed = new Discord.RichEmbed()
  .setTitle(`Player: ` + hypixelPlayer.displayname)
  .setColor(`RANDOM`)
  .setTimestamp()
  message.channel.send(playerembed);
//}
//else {
//	message.channel.send(`:no_entry: \`Usage: !player <name>\``)
//}
//client.getPlayer('name', user).then((player) => {
//    console.log(player)
//}).catch((err) => {
//    console.error('Error! ' + err)
//})    

}

module.exports.help = {
  name: "hypixel"
}
