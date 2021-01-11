const Discord = require('discord.js');
const {
	Client,
	Attachment
} = require('discord.js');
const bot = new Client();
bot.on('ready', () => {
    console.log(`BOT READY`)
});
const config = require('./config.json')
const token = config.token

const mony = {
    files: ['https://cdn.discordapp.com/attachments/600730403103309845/720471916842057739/alien-holding-dollar-sign-illustration-vector-on-white-backgro-209842786.png']
  }

  

// Console Chat, revised by Angel Bot \\
let channelID = "756235477161476106"
let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim()
    if (x.startsWith("/embed ")) {
        let text = x.substring(7);
        const cnslembed = new Discord.MessageEmbed()
            .setTitle(text);
        bot.channels.fetch(channelID).then(ch => ch.send(cnslembed));
    } else if (x.startsWith("/channel ")) {
        channelID = x.substring(9);
        console.log(`Set ChannelID to <#${channelID}>`)
    } else if (x == "/mony") {
        bot.channels.fetch(channelID).then(ch => ch.send('what the fuck is that', mony));
    } else {
        bot.channels.fetch(channelID).then(ch => ch.send(x));
    }
})

bot.login(token)