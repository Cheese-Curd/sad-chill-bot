module.exports = {
    "name": "whois",
    "description": "whois",
    execute(message, args) {
        const dmusr = message.mentions.users.first();
        if (!message.guild) {
            message.author.send(`bro you're not in a server lmao`)
        } else {
            const dmmbr = message.guild.member(dmusr);
            if (dmusr) {
                if (dmmbr) {
                    // Thanks Angel Bot#6208 for the code here
                    const version = '1.1.5 B'
                    const Discord = require('discord.js');
                    var bottag = 'No'
                    if (dmusr.bot == true) {
                        bottag = `Yes`
                    } else {
                        bottag = `No`
                    }
                    if (dmusr.id == `719386750266376203`) {
                        const whois = new Discord.MessageEmbed()
                            .setAuthor('Version ' + version)
                            .setTitle('WhoIs')
                            .setColor(0x1FFF00)
                            .setDescription('Who are they?')
                            .addField(`Username:`, `read my name lmao`)
                            .addField(`Bot?`, `duh`)
                            .addField(`Discriminator:`, dmusr.discriminator)
                            .addField(`ID`, dmusr.id)
                            .setTimestamp()
                            .setFooter('By: Cheese Curd | Trey');
                        message.channel.send(whois)
                    } else if (dmusr.id == `425380284192653315`) {
                        const whois = new Discord.MessageEmbed()
                            .setAuthor('Version ' + version)
                            .setTitle('WhoIs')
                            .setColor(0x1FFF00)
                            .setDescription('Who are they?')
                            .addField(`Username:`, `Cheese Curd | Trey`)
                            .addField(`Bot?`, `at games yeah`)
                            .addField(`Discriminator:`, dmusr.discriminator)
                            .addField(`ID`, dmusr.id)
                            .setTimestamp()
                            .setFooter('By: Cheese Curd | Trey');
                        message.channel.send(whois)
                    } else {
                        const whois = new Discord.MessageEmbed()
                            .setAuthor('Version ' + version)
                            .setTitle('WhoIs')
                            .setColor(0x1FFF00)
                            .setDescription('Who are they?')
                            .addField(`Username:`, dmusr.username)
                            .addField(`Bot?`, bottag)
                            .addField(`Discriminator:`, dmusr.discriminator)
                            .addField(`ID`, dmusr.id)
                            .setTimestamp()
                            .setFooter('By: Cheese Curd | Trey');
                        message.channel.send(whois)
                    }
                } else {
                    message.author.reply("That user isn't in this Server! You can't DM them.");
                    console.log(`User not in Server.`);
                }
            } else {
                message.channel.send("Make sure to add a ping before you send that command!")
            }
        }
    }
}