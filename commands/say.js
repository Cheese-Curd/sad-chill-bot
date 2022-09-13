module.exports = {
    "name": "say",
    "description": "Force SCB to say whatever you want her to say [Owner Only]",
    execute(msg, args) {
        const toSend = args.join(" ");
        const config = require('../config.json')
        msg.delete();
        if (args.length < 1) {
            if (config.debug)
              console.debug(`Could not find any arguments for say command.`)
            msg.author.send("Make sure to add text before you send that command!")
        } else {
          msg.channel.send(toSend);
        }
    }
}
