const Discord = require("discord.js");
let cmd = require("../commands.json");

module.exports.run = async (bot, message, args) => {

let dm = new Discord.RichEmbed()
    .setColor(`#409cd9`)
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(`<a:Chest:511163406967898115> I have private messaged you a list of commands!`)
    .setTimestamp()
    message.channel.send(dm);

const pages = [cmd.page1, cmd.page2, cmd.page3, cmd.page4]
let page = 1;

const colors = ['#2855fc', '#fcf428', '#fc2929', '#f39c12', '#28bffc']
let color = 1;

let helpembed = new Discord.RichEmbed()
    .setColor(colors[color - 1])
    .setAuthor(`Commands & Guides`, bot.user.avatarURL)
    .setDescription(pages[page - 1])
    .setFooter(`Page ${page} of ${pages.length}`)
    .setTimestamp(new Date());
    message.author.send(helpembed).then(msg => {
      msg.react('⬅').then(() => {
        msg.react('➡');

      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });


      backwards.on('collect', () => {
        if (page === 1) return;
        page--;
        color--;
        helpembed.setDescription(pages[page - 1]);
        helpembed.setColor(colors[color - 1]);
        helpembed.setFooter(`Page ${page} of 5`);
        msg.edit(helpembed);
      });

      forwards.on('collect', () => {
        if (page === 5) return;
        page++;
        color++;
        helpembed.setDescription(pages[page - 1]);
        helpembed.setColor(colors[color - 1]);
        helpembed.setFooter(`Page ${page} of 5`);
        msg.edit(helpembed);
      });
    });
  });
}
module.exports.help = {
  name: "help"
}
