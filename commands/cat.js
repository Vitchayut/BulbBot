const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`http://aws.random.cat//meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("#ffa202")
  .setDescription("<a:bongocat:511169796151312384> Here's the cat! <a:NekoAtsumeBall2:511178220519817246>")
  .setImage(body.file);

  message.channel.send(catembed);

}

module.exports.help = {
  name: "cat"
}
