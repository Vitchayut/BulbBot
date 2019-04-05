const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#ffa202")
  .setDescription("<a:Confused_Dog:511180901934301204> Here's the doggo! <a:cooldoge:511180988601073665>")
  .setImage(`${body}`);

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "shibe"
}
