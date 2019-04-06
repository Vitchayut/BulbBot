const Discord = require("discord.js");
const ytdl = require('ytdl-core');
let config = require("../botconfig.json");

module.exports.run = async (client, message, args, ops) => {

    let connecttovoice = new Discord.RichEmbed()
    .setAuthor(message.member.displayName, message.author.displayAvatarURL)
    .setColor(config.red)
    .setDescription(`<:poll_disagree:437529095065174020> Please connect to a voice channel!`);

    if (!message.member.voiceChannel) return message.channel.send(connecttovoice);

    let puturl = new Discord.RichEmbed()
    .setAuthor(message.member.displayName, message.author.displayAvatarURL)
    .setColor(config.red)
    .setDescription(`<:poll_disagree:437529095065174020> Sorry, please input a url following the command.`);
    if (!args[0]) return message.channel.send(puturl);
    let validate = await ytdl.validateURL(args[0]);



    if (!validate) {
      let commandFile = require('./search.js');
      return commandFile.run(client, message, args, ops);

    }

    let info = await  ytdl.getInfo(args[0]);

   let data = ops.active.get(message.guild.id) || {};
    if (!data.connection) data.connection = await message.member.voiceChannel.join();
    if(!data.queue) data.queue = [];
    data.guildID = message.guild.id;

    data.queue.push({
        songTitle: info.title,
        songLength: info.length_seconds,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id,
        displayReqName: message.member.displayName,
        displayReqAvatar: message.author.displayAvatarURL,
        videoID: info.video_id,
        videoAuthor: info.author.name,
        //videoThumbnail: info.

    });

    if (!data.dispatcher) play(client, ops, data);
    else {
      //let seconds = info.length_seconds
      //let minutes = info.length_seconds / 60
      //let hours = info.length_seconds / 3600
      //if (seconds > 59) seconds = seconds / 2;
      //if (seconds < 59) minutes = '00';
      //if (minutes < 59) hours = '00';
      let addtoqueue = new Discord.RichEmbed()
      .setThumbnail("https://cdn.dribbble.com/users/523915/screenshots/5744319/queue-logo.png")
      .setColor("#4286f4")
      .setAuthor(`${message.member.displayName}`, `${message.author.displayAvatarURL}`)
      .setDescription(`<:join:510816481173438464> Successfully added to queue! :clipboard:\n<:youtube:504511820023988234> [**${info.title}**](https://www.youtube.com/watch?v=${info.video_id})`)
      .addField(`Creator`, `${info.author.name}`, true)
      //.addField(`Duration`, `${hours}:${minutes}:${seconds}`, true)
      .setTimestamp()
      .setFooter(`Added to queue!`, `${message.author.displayAvatarURL}`);
        message.channel.send(addtoqueue)
    }
    ops.active.set(message.guild.id, data);


}
async function play(client, ops, data) {
  //const pauseE = client.emojis.find(emoji => emoji.id === "551350869929754632");
  //const playE = client.emojis.find(emoji => emoji.id === "551350877353672715");

  let nowplaying = new Discord.RichEmbed()
  .setThumbnail("https://pbs.twimg.com/media/DdfcX3BVwAAqzHV.png")
  .setColor("#4286f4")
  .setAuthor(`${data.queue[0].displayReqName}`, `${data.queue[0].displayReqAvatar}`)
  .setDescription(`<:youtube:504511820023988234> [**${data.queue[0].songTitle}**](https://www.youtube.com/watch?v=${data.queue[0].videoID})`)
  .addField(`Creator`, `${data.queue[0].videoAuthor}`, true)
  //.addField(`Duration`, `${data.queue[0].songLength}`, true)
  .setTimestamp()
  .setFooter(`Now playing!`, `${data.queue[0].displayReqAvatar}`);
    client.channels.get(data.queue[0].announceChannel).send(nowplaying).then((msg) => {
    msg.react('\u23F8').then(() => {
      msg.react('\u23EF').then(() => {
        msg.react('👍').then(() => {
          msg.react('👎');

      const backwardsFilter = (reaction, user) => reaction.emoji.name === '\u23F8'; //&& user.id === msg.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '\u23EF'; //&& user.id === msg.author.id;


      const backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });

      const forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });


      backwards.on('collect', () => {
        let fetched = ops.active.get(msg.guild.id);
        if (fetched.dispatcher.paused) return;
        fetched.dispatcher.pause();
      });

      forwards.on('collect', () => {
        let fetched = ops.active.get(msg.guild.id);
        if (!fetched.dispatcher.paused) return;
        fetched.dispatcher.resume();
      });
    });
  });
});
});

    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, {filter: 'audioonly'}));
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('end', function() {
        end(client, ops, this);

    });

}
function end(client, ops, dispatcher){

    let fetched = ops.active.get(dispatcher.guildID);

    fetched.queue.shift();

    if (fetched.queue.length > 0) {
        ops.active.set(dispatcher.guildID, fetched);
        play(client, ops, fetched);
    } else {
        ops.active.delete(dispatcher.guildID);

        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;

        if (vc) vc.leave();

    }

}

module.exports.help = {
  name: "play"
}
