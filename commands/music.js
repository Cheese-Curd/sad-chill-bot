module.exports = {
    "name": "music",
    "description": "music",
    execute(message, args) {
        console.log(`Music Command Activated.`)
        message.channel.send(`**[An error has appeared!]**\n**Reason:** \`$music\` is being worked on.`)
    }
}