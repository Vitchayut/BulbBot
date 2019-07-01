const discord = require("discord.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    // ID Category.
    const categoryId = "595249774563950602";

    // Username.
    var userName = message.author.username;
    // Discriminator.
    var userDiscriminator = message.author.discriminator;

    // If ticket has already been made.
    var bool = false;

    // Check if ticket has already been made.
    message.guild.channels.forEach((channel) => {

        // If ticket is made, send a message.
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

            let embed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor(config.red)
            .setDescription(`<:red_tick:566946004948090880> \`You have already created a ticket!\``)
            .setTimestamp()
            message.channel.send(embed);

            bool = true;

        }

    });

    // Return if the ticket has already been made.
    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setColor(config.blue)
        .setFooter(`New ticket created!`)
        .setTimestamp();

    message.channel.send(embedCreateTicket);

    // Create a channel and put it in the ticket category.
    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { // Create a channel.

        createdChan.setParent(categoryId).then((settedParent) => { // Put the channel in the ticket category.

            // Set perms for everyone.
            settedParent.overwritePermissions(message.guild.roles.find(role => role.name === "@everyone"), { "READ_MESSAGES": false });
            // Set perms for the user who created the ticket.
            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

            });

            var embedParent = new discord.RichEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL)
                .setColor(config.blue)
                .setDescription("Support from our staff member will be here shortly!")
                .setTimestamp();

            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Something went wrong!");
        });

    }).catch(err => {
        message.channel.send("Something went wrong!");
    });

}

module.exports.help = {
    name: "ticket"
}
