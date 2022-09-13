module.exports = {
    "name": "say",
    "description": "Force the bot to say whatever you want her to say [Owner Only]",
    execute(message, args) {
        let msg = args; // making a new variable with the argument list
        const toSend = msg.join(" ");
        const config = require('../../config.json')
        message.delete();
        if (args.length < 1) {
            if (config.debug)
              console.debug(`Could not find any arguments for say command.`)
            message.author.send("Make sure to add text before you send that command!")
        } else {
          message.channel.send(toSend);
        }
    }
}
