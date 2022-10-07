module.exports = {
    "name": "wip",
    "description": "Sorry! This command is currently in progress and will not work.",
    execute(msg, args, config) {
        msg.channel.send(`<@${msg.author.id}>, **[An error has appeared!]**\n**Reason:** 'This command is not finished and will not work correctly.`) // old reply moment
    }
}
