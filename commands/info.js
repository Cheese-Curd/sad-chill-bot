module.exports = {
    "name": "info",
    "description": "info",
    execute(message, args) {
        const cmdsnmb = "20 :O";
        const Discord = require('discord.js');
        const {
            Client,
        } = require('discord.js');
        const bot = new Client();
        console.log(`Info Command Activated.`)
        if (message.channel instanceof Discord.DMChannel) { //do not execute
        } else {
            const info = new Discord.MessageEmbed()
                .setTitle('Server Info')
                .setDescription('Server Info')
                .setColor(0x1FFF00)
                .addField('Server', message.guild.name, true)
                .addField('Server Members', message.guild.memberCount, true)
                .setFooter('By: Cheese Curd | Trey');
            const info2 = new Discord.MessageEmbed()
                .setTitle('Bot Info')
                .setDescription('Bot Info')
                .setColor(0xFF0000)
                .addField('Bot Name', "Sad Chill Bot", true)
                .addField('Commands', cmdsnmb, true)
                .addField('Servers In', '[BROKEN CODE]', true) // bot.guilds.cache.size, true) //<<< is broken please fix!!
                .setFooter('By: Cheese Curd | Trey');
            message.channel.send(info)
            message.channel.send(info2)
        }
    }
}