module.exports = {
    "name": "wip",
    "description": "Sorry! This command is currently in progress and will not work.",
    execute(msg, args, config) {
        msg.channel.send(`<@${msg.author.id}>, this command is not finished yet. Sorry!`) // old reply moment
    }
}