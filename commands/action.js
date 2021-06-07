module.exports= {
    "name": "action",
    "description": "action",
    execute(message, args){
        const action = args[0];
        const ping = args[1];
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
        const shit = {files: ['./commands/videos/shit.mp4']};
        if (!action) {
            message.channel.send(`Don't forgot the \`action\`!`);
        } else {
            if (action == 'shit') {
                message.delete();
                message.channel.send(shit)
            } else {
                if (action == 'kiss') {
                    if (!ping) {
                        message.channel.send(`Don't forget to ping someone to do the action to!`)
                    } else {
                        if (!member) {
                            message.channel.send('This person is not in the server!')
                        } else {
                            message.delete();
                            message.channel.send(`*${message.author} kissed ${user}*`)
                        }
                    }
                } else {
                    if (action == 'help') {
                        message.channel.send('**__ACTION HELP__**\n• shit\n• kiss\n• pat\n• hug\n• cuddle\n• kill')
                    } else if (action == 'pat') {
						if (!ping) {
							message.channel.send(`Don't forget to ping someone to do the action to!`)
						} else {
							if (!member) {
								message.channel.send('This person is not in the server!')
							} else {
								message.delete();
								message.channel.send(`*${message.author} patted ${user}*`)
							}
						}
					} else if (action == 'hug') {
                            if (!ping) {
                                message.channel.send(`Don't forget to ping someone to do the action to!`)
                            } else {
                                if (!member) {
                                    message.channel.send('This person is not in the server!')
                                } else {
                                    message.delete();
                                    message.channel.send(`*${message.author} hugged ${user}*`)
                                }
							}
					} else if (action == 'cuddle') {
                        if (!ping) {
                            message.channel.send(`Don't forget to ping someone to do the action to!`)
                        } else {
                            if (!member) {
                                message.channel.send('This person is not in the server!')
                            } else {
                                message.delete();
                                message.channel.send(`*${message.author} is cuddling ${user}*`)
                            }
                        }
                    } else if (action == 'kill') {
                        if (!ping) {
                            message.channel.send(`Don't forget to ping someone to do the action to!`)
                        } else {
                            if (!member) {
                                message.channel.send('This person is not in the server!')
                            } else {
                                message.delete();
                                message.channel.send(`*${message.author} killed ${user}*`)
                            }
                        }
                    }
				}
			}
		}
	}
}