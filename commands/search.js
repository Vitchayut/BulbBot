const Discord = require("discord.js");
const search = require('yt-search');
let config = require("../botconfig.json");


module.exports.run = (client, message, args, ops) => {



  search(args.join(' '), function(err, res) {

    let wrong = new Discord.RichEmbed()
    .setAuthor(message.member.displayName, message.author.displayAvatarURL)
    .setColor(config.red)
    .setDescription(`<:poll_disagree:437529095065174020> Sorry, something went wrong.`);
    if (err) return message.channel.send(wrong);

    let videos = res.videos.slice(0, 10);

    let resp = '';

    for (var i in videos) {
      resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;

    }

    resp += `\n**Choose a number between** \`1-${videos.length}\``;

    message.channel.send(resp);

    const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

    const collector = message.channel.createMessageCollector(filter);

    collector.videos = videos;

    collector.once('collect', function(m){
      let commandFile = require('./play.js');
      commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);



    });


  });


}

module.exports.help = {
  name: "search"
}
