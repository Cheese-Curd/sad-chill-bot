module.exports = {
    "name": "say",
    "description": "make the bot speak",
    execute(message, args) {
        let msg = args; // making a new variable with the argument list
        const toSend = msg.join(" ");
        const config = require('../../config.json')
        if (config.whitelist.includes(message.author.id)) {
            message.delete();
            if (args.length < 1) {
                message.author.send("Make sure to add text before you send that command!")
            } else {
                if (message.author.id == 425380284192653315) {
                    console.log(`Trey said  "${toSend}"`);
                    message.channel.send(toSend);
                } else {
                    console.log(`${message.author.username} said  "${toSend}"`);
                     message.channel.send(toSend);
                }
            }
        } else {
            message.delete();
            console.log(`${message.author.username} tried to say "${toSend}"`);
            message.author.send(`I ain't lettin' you do that mate`)
        }
    }
}