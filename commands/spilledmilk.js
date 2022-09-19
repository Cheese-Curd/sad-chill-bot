module.exports = {
    "name": "watermelon",
    "description": "haha, spilled milk go brrrrrrrrr",
    execute(msg, args, config) {
        if (config.debug)
            console.debug(`${msg.author.username} did funky milk :)`)
        const img = {
            files: ['https://media.discordapp.net/attachments/744309816393990289/751613934167130112/ezgif.com-add-text_1.gif?width=540&height=410']
        }
        message.channel.send(img)
    }
}
