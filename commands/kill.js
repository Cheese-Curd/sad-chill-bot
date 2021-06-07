module.exports = {
    "name": "kill",
    "description": "kill someone",
    execute(message, args) {
        console.log(`Kill Command Activated.`)
        // message.channel.send(botstate)
        const usr = message.mentions.users.first();
        if (!message.guild) {
            message.author.send(`bro you're not in a server lmao`)
        } else {
            const mbr = message.guild.member(usr);
            if (usr) {
                if (mbr) {
                    const deadppimg = {
                        files: ['https://cdn.discordapp.com/attachments/586361415955251230/720084389576441926/medium.png']
                    }
                    message.channel.send(deadppimg)
		            message.channel.send(`${usr}, died oh god what are we going to do uhhhhhhhhhhhh UMM WHAT DO WE DO @everyone?`)
                } else {
                    message.channel.send(`They aren't in the server!`)
                }
            } else {
                message.channel.send(`You have to ping someone!`)
            }
        }
    }
}