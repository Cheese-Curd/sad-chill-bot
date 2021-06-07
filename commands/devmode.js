module.exports = {
    "name": "devmode",
    "description": "useless cmd lol",
    execute(message, args) {
        if (args[0] == `1`) {
            message.channel.send(`**__[DEVELOPER MODE ENABLED]__**`)
        } else if (args[0] == '0') {
            message.channel.send(`**__[DEVELOPER MODE DISABLED]__**`)
        } else {
            message.channel.send(`**__[INVALID VALUE]__**`)
        }
    }
}