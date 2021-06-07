module.exports = {
    "name": "cmds",
    "description": "Owner Only Commands",
    execute(message, args) {
        const config = require('../../config.json')
        if (config.whitelist.includes(message.author.id)) {
            message.delete();
            message.channel.send(`__**Owner Only Commands**__`)
            message.channel.send(`> 1. $say | Say anything as SCB\n> 2. $oocmds | Owner Only Commands\n> 3. $restart | Restart the bot\n> 4. $odm | DM someone`)
        } else {
            message.delete();
            console.log(`${message.author.username} tried to look at Owner Only Commands`);
            message.author.send(`bro, you can't even do those lmao`)
        }
    }
}