const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
    const member = message.guild.member(user);

	// Discord rich embed
    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
		.setAuthor(`${user.username}`, user.avatarURL)
    .addField('<:bustin:510814667564646410> \`Username\`', `${user.username}#${user.discriminator}`, true)
    .addField(':card_index: \`User ID\`', `${user.id}`, true)
		.addField('<:nickname:523830992075620353> \`Nickname\`', `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField(`<:bot:511515593107570699> \`Bot Account\``, `${user.bot}`, true)
		.addField(`<:discord_online:553168186925907980> \`User Status\``, `${user.presence.status}`, true)
		.addField(':video_game: \`User Activity\`', `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField(':label: \`Roles\`', member.roles.map(roles => `<@&${roles.id}>`).join(', '), true)
    .addField(':calendar: \`Joined Guild Date\`', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
    .addField(':calendar: \`Account Created Date\`', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
    .setFooter(`💬 Replying to ${message.author.username}#${message.author.discriminator}`)
     message.channel.send({embed});
}

module.exports.help = {
  name: "userinfo"
}
