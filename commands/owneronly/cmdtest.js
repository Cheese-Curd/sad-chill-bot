module.exports = {
    "name": "cmdtest",
    "description": "cmdtest",
    async execute(message, args) {
        console.log(`Music Command Activated.`)
        // message.channel.send(`no :3`)
        const {
            Client
        } = require('discord.js');
        const ytdl = require('ytdl-core');
        const bot = new Client();
        const config = require('../../config.json')
        if (config.whitelist.includes(message.author.id)) {
            if (message.author.bot) {
                return;
            } else {
                const voicechannel = message.member.voice.voicechannel
                if (!voicechannel) {
                    message.channel.channel.send('You have to be in a Voice Channel lmao')
                } else {
                    const perms = voicechannel.permissionsFor(message.client.user)
                    if (!perms.has('CONNECT')) {
                        message.channel.send(`I don't have the right permission to join that Voice Channel!`)
                    }
                    if (!perms.has(`SPEAK`)) {
                        message.channel.send(`I don't have the right permission to speak in that Voice Channel!`)
                    }

                    try {
                        var connection = await voicechannel.join()
                    } catch (error) {
                        console.log(`There was an error connecting to VC: ${error}`)
                        return message.channel.send(`There was an error joining that Voice Channel: ${error}`)
                    }

                    const dispatcher = connection.play(ytdl(args[1]))
                        .on('finish', () => {
                            voicechannel.leave()
                        })
                        .on('error', error => {
                            console.logs(error)
                        })

                } //  else if (args[2] == 'stop') {
                //     if (!message.member.voice.channel) {
                //         message.channel.send('You need to be in a Voice Channel to stop the music.')
                //     } else {
                //         message.member.voice.channel.leave()

                //     }
                // }
            }
        } else {
            message.channel.send(`I ain't lettin' you do that mate`)
        }
    }
}