module.exports = {
    "name": "watermelon",
    "description": ":watermelon:",
    execute(msg, args, config) {
        if (config.debug)
            console.debug(`${msg.author.username} did funny watermelon :)`)
        const watermelonimg = {
            files: ['https://cdn.glitch.com/1a2261c6-320b-4571-b7be-da17b36ac76f%2Fb76cc38a-c518-4fbc-be7e-926287ded139.image.png?v=1591686798503']
        }
        message.channel.send(':watermelon: **w   a   t   e   r   m   e   l   o   n** :watermelon:', watermelonimg)
    }
}
