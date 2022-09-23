module.exports = {
    "name": "say",
    "description": "Force SCB to say whatever you want her to say [Owner Only]",
    execute(msg, args, config) {
        const toSend = args.join(" ");

        try
        {
          msg.delete();
        } catch(e) // this no do anything :c
        {
          console.error(e);
        }
        
        if (args.length < 1) {
            if (config.debug)
              console.debug(`Could not find any arguments for say command.`)
            msg.author.send("Make sure to add text before you send that command!")
        } else {
          if (config.debug)
              console.debug(`Said: "${toSend}"`)
          msg.channel.send(toSend);
        }
    }
}
