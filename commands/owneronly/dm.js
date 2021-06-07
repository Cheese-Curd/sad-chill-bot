module.exports = {
    "name": "odm",
    "description": "DM someone",
    execute(message, args) {
        const dmusr = message.mentions.users.first();
        const config = require('../../config.json')
		// Thanks Angel Bot#6208 for the code here
		let msg = args; // making a new variable with the argument list
		msg.shift(); // removing the first argument from the list
		const toSend = msg.join(' ');
        if (config.whitelist.includes(message.author.id)) {
            
            if (args.length < 1) {
                message.delete()
                message.author.send("Make sure to add text before you send that command!")
            } else {
                if (!message.guild) {
                    message.author.send(`bro you're not in a server lmao`)
                } else {
                    const dmmbr = message.guild.member(dmusr);
                    if (dmusr) {
                        if (dmmbr) {
                            message.delete();
                            if (args.length < 1) {
                                message.author.send("Make sure to add text after the ping before you send that command!")
                            } else {
                                console.log(`${message.author.username} sent "${toSend}" to ${dmusr.username}`);
                                dmusr.send(toSend) // sending the list as a string with spaces seperating the items
                                    .catch(() => message.author.send(`I could not send that DM to <@!${dmusr.id}>, this might be because they have DMs off or it was just a random error. Please try again later!`));
                            }
                        } else {
                            message.delete()
                            message.author.send("That user isn't in this Server! You can't DM them.");
                            console.log(`DM User not in Server.`);
                        }
                    }
                }
            }
        } else {
            message.delete();
            console.log(`${message.author.username} tried to say "${toSend}"`);
            message.author.send(`I ain't lettin' you do that mate`)
        }
    }
}