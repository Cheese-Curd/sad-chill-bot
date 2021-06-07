module.exports = {
    "name": "8ball",
    "description": "8ball",
    execute(message, args) {
        const config = require("../config.json")
        const quotes = config.ball
        message.channel.send(quotes[Math.floor(Math.random() * (quotes.length - 1)) + 1])
    }
}