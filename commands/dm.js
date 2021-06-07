module.exports = {
    "name": "dm",
    "description": "DM someone",
    execute(message, args) {
        const dmusr = message.mentions.users.first();
        if (!message.guild) {
            message.author.send(`bro you're not in a server lmao`)
        } else {
            const dmmbr = message.guild.member(dmusr);
            if (dmusr) {
                if (dmmbr) {
                    message.delete();
                    // Thanks Angel Bot#6208 for the code here
                    let msg = args; // making a new variable with the argument list
                    msg.shift(); // removing the first argument from the list
                    if (args.length < 1) {
                        message.author.send("Make sure to add text after the ping before you send that command!")
                    } else {
                        const toSend = msg.join(" ");
                        console.log(`${message.author.username} sent "${toSend}" to ${dmusr.username}`);
                        dmusr.send("[USER REQUESTED] " + toSend) // sending the list as a string with spaces seperating the items
                            .catch(() => message.author.send(`I could not send that DM to <@!${dmusr.id}>, this might be because they have DMs off or it was just a random error. Please try again later!`));
                    }
                } else {
                    message.author.send("That user isn't in this Server! You can't DM them.");
                    console.log(`DM User not in Server.`);
                }
            }
        }
    }
}