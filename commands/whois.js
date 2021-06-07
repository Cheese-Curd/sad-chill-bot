module.exports = {
    "name": "whois",
    "description": "whois",
    execute(message, args) {
        const dmusr = message.mentions.users.first();
        const Discord = require('discord.js');
        if (!message.guild) {
            message.author.send(`bro you're not in a server lmao`)
        } else {
            const dmmbr = message.guild.member(dmusr);
            if (dmusr) {
                if (dmmbr) {
                    // if (dmmbr.nickname != null) {
                    //     console.log('sex cum :D')
                    // } else {
                    //     console.log('no sex cum :,c')
                    // }
                    // Thanks Angel Bot#6208 for the code here
                    const version = '1.1.5 B'
                    const Discord = require('discord.js');
					const whois = new Discord.MessageEmbed()
						.setAuthor(`Version ${version}`)
						.setTitle(`WhoIs`)
						.setDescription(`Who are they?`)
						.setColor(0x1FFF00)
						.setThumbnail(dmusr.avatarURL())
						.setTimestamp()
						.setFooter('By: Cheese Curd | Trey');
					if (dmusr.id == `719386750266376203`)
					{
						whois.addField(`Username:`, `read my name lmao`);
						if (dmmbr.nickname)
							whois.addField(`Nickname:`, dmmbr.nickname);
						whois.addField(`Bot?`, `duh`);
					}
					else if (dmusr.id == `425380284192653315`)
					{
						whois.addField(`Username:`, `Cheese Curd | Trey`);
						if (dmmbr.nickname)
							whois.addField(`Nickname:`, dmmbr.nickname);
						whois.addField(`Bot?`, `at games yeah`);
					}
					else
					{
						whois.addField(`Username:`, dmusr.username);
						if (dmmbr.nickname)
							whois.addField(`Nickname:`, dmmbr.nickname);
						if (dmusr.username.toLowerCase().includes(`bot`))
							whois.addField(`Bot?`, `uhhhhhhhh, yeahhhhhhhh?????????? noooooooo?????????????`);
						else
							whois.addField(`Bot?`, dmusr.bot ? `Yes` : `No`);
					}
					whois.addField(`Discriminator:`, dmusr.discriminator);
					whois.addField(`ID`, dmusr.id);
					message.channel.send(whois);
                    /* var bottag = 'No'
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
                    } else if (dmusr.username.toLowerCase().search(/\bbot\b/) >= 0) {
                        if (dmusr.bot == true) {
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
                        } else {
                            const whois = new Discord.MessageEmbed()
                                .setAuthor('Version ' + version)
                                .setTitle('WhoIs')
                                .setColor(0x1FFF00)
                                .setDescription('Who are they?')
                                .addField(`Username:`, dmusr.username)
                                .addField(`Bot?`, `uhhhhhhhh, yeahhhhhhhh?????????? noooooooo?????????????`)
                                .addField(`Discriminator:`, dmusr.discriminator)
                                .addField(`ID`, dmusr.id)
                                .setTimestamp()
                                .setFooter('By: Cheese Curd | Trey');
                            message.channel.send(whois)
                        }
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
                    } */
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