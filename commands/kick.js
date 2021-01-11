module.exports = {
    "name": "kick",
    "description": "kick",
    execute(message, args) {
        if (!message.guild.roles.cache.find(r => r.name === "Kick/Ban Rights")) {
            message.channel.send(`The owner did not make a "Kick/Ban Rights" role.  Also you probably don't have access lmao`)
            console.log(`Server Owner had no "Kick/Ban Rights" role in server.`)
        } else {
            if (message.member.roles.cache.find(r => r.name === "Kick/Ban Rights")) {
                // Ignore messages that aren't from a guild \\
                if (!message.guild) return;
                // Assuming we mention someone in the message, this will return the user \\
                const user2 = message.mentions.users.first();
                const member2 = message.guild.member(user2);
                // If we have a user mentioned \\
                if (user2) {
                    if (member2) {
                        member2
                            .kick('Kicked By: Sad Chill Bot')
                            .then(() => {
                                message.reply(`Successfully kickned ${user2.tag}`);
                                console.log(`Kicked ${user2.tag}`)
                            })
                            .catch(err => {
                                message.reply('I was unable to kick the member');
                                console.log(`Bot unable to kick member reason \/`)
                                console.error(err);
                            });
                    } else {
                        message.reply("That user isn't in this Server!");
                        console.log(`User not in Server.`)
                    }
                } else {
                    message.reply("You didn't mention the user to kick!");
                    console.log(`User didn't mention user to kick.`)
                }
            } else {
                message.channel.send('You Do Not Have Permission.')
                console.log(`User Doesn't have Permission to kick.`)
            }
        }
    }
}