module.exports = {
    "name": "ping",
    "description": "A basic test command that pretty much everyone uses.",
    execute(msg, args, config) {
        msg.channel.send(`<@${msg.author.id}>, Pong! *(I like the old reply better, shush)*`) // old reply moment
    }
}