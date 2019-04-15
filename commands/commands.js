const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let dm = new Discord.RichEmbed()
    .setColor(`#409cd9`)
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(`<a:Chest:511163406967898115> I have private messaged you a list of commands!`)
    .setTimestamp()
    message.channel.send(dm);

const pages = [`**<a:righter_arrow:518744759506960406> Click on the arrows to change the page! <a:lefter_arrow:518744793489342464>**`, `**:desktop: General Commands**\n\`help/commands\` - Show a list of commands & guides to your DM.\n\`ping\` - Show the current bot ping/ms.\n\`verify/verification\` - Verify your discord account.\n\`botinfo\` - Shows the information of the bot.\n\`serverinfo\` - Show the information of the guild.\n\`userinfo <user>\` - Show the information of the user.\n\`dog/doggo\` - A fun command that show a random dog photo/gif.\n\`cat\` - A fun command that show a random cat photo/gif.\n\`doge/shibe/shiba\` - A fun command that show a random shibe photo/gif.\n\`8ball <question>\` - A fun command that answer your question.\n\`guilds/servers\` - Show a list of <@482795587045949440> guilds.\n\`leaderboard/leaderstats\` - Show a list of <@482795587045949440> guilds, from the most members to least.\n\`weather <city/state/province/prefecture>\` - Show the current weather statistics.\n\`calc/calculate/calculator <equation>\` - Solve the given equation.\n\`minecraft <player>\` - Show the player statistics.\n\`roblox <player>\` - Show the player statistics.`, `**:tools: Moderation Commands**\n\`clear <amount>\` - Clear the given amount of messages.\n\`kick <user> <reason>\` - Kick a user with the given reason.\n\`ban <user> <reason>\` - Ban a user with the given reason.\n\`setlog <channel>\` - Set the mod-logs channel.\n\`say <text>\` - Force <@482795587045949440> to chat with your given text.\n\`poll <text>\` - Create a vote poll with <:green_tick:566945998761361408> and <:red_tick:566946004948090880> as a reaction to vote.\n\`prefix <bot prefix>\` - Change the bot prefix with your own choice.`, `**:headphones: Music Commands**\nCurrently, the commands in this category are being edited by <@346102251632197632>\nDue to the issues with Heroku, please use <@563656586069803009> for music commands instead.`]
let page = 1;

const colors = ['#2855fc', '#fcf428', '#fc2929', '#28bffc']
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
        helpembed.setFooter(`Page ${page} of 4`);
        msg.edit(helpembed);
      });

      forwards.on('collect', () => {
        if (page === 4) return;
        page++;
        color++;
        helpembed.setDescription(pages[page - 1]);
        helpembed.setColor(colors[color - 1]);
        helpembed.setFooter(`Page ${page} of 4`);
        msg.edit(helpembed);
      });
    });
  });
}
module.exports.help = {
  name: "commands"
}
