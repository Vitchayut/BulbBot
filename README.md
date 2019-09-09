# frisbee-max
For educational purposes.

Credits to [**Zendovo**](https://github.com/Zendovo) & [**TheSourceCode**](https://github.com/The-SourceCode) for their useful guides & tutorial on how to host a bot on Heroku.
Also thanks to [**ItsNuaZ**](https://github.com/ItsNuaZ) for letting me use his code.

# Additional Notes:
Be sure to replace the following tokens with yours!
For users who host a bot by themselves!

[1] Replace **process.env.token** with your bot token. **(index.js)**

[2] Replace **process.env.hypixel** with your hypixel api token. **(commands > hypixel.js) (UPCOMING FEATURE!)**

[3] Replace **process.env.guild** with the guild ID that you want the **swear filter** to ignore. **(index.js)**

[4] Replace **process.env.guildID** with the guild ID that you want the **member counter** feature. **(index.js)**

[5] Replace **process.env.totalUsersID** with the channel ID that you want the **total users** feature. **(index.js)**

Wanted to host a bot for 24/7 without using your own PC?

No problem!, You can also host a bot on Heroku!

Be sure to create your own github repository!

Read the **FAQ** below for Heroku users.

# FAQ (Host a bot on Heroku.):
**Q: How do I get my own discord bot token?**

**A: Follow the instructions below.**

     [1] Navigate to https://discordapp.com/developers/applications
     
     [2] Create a new application or choose your existing application.
     
     [3] Select "Bot" and then click "Copy" below from the token.
     
     [4] Navigate to your Heroku app settings.
     
     [5] Select "Reveal Config Vars".
     
     [6] Put "token" on the first box and then put your bot token on the second box.
     
     [7] Select "Add" and you're done with the token.
     
**Q: How do I get my own hypixel api token? (UPCOMING FEATURE!)**

**A: Follow the instructions below. (UPCOMING FEATURE!)**

     [1] Simply join hypixel, and then type "/api new".
     
     [2] Navigate to your Heroku app settings.
     
     [3] Select "Reveal Config Vars".
     
     [4] Put "hypixel" on the first box and then put your api key on the second box.
     
     [5] Select "Add" and you're done with the token.
