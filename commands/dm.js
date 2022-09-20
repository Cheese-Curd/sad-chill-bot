module.exports = {
    "name": "dm",
    "description": "Direct message someone as the bot!",
    execute(msg, args, config) {
        const dmusr = msg.mentions.users.first();
        if (!msg.guild) {
            msg.author.send(`bro you're not in a server lmao`)
        } else {
            list.members.fetch().then(m => {
                let members = m.map(u => u.user.username)
                if (u.user.username == dmusr.username)
                {
					msg.delete();
                    // Thanks Angel Bot#6208 for the code here
                    let msg = args; // making a new variable with the argument list
                    msg.shift(); // removing the first argument from the list
                    if (args.length < 1) {
                        msg.author.send("Make sure that there is text or a ping!")
                    } else {
                        const toSend = msg.join(" ");
                        console.log(`${msg.author.username} sent "${toSend}" to ${dmusr.username}`);
                        dmusr.send("[USER REQUESTED] " + toSend) // sending the list as a string with spaces seperating the items
                            .catch(() => msg.author.send(`I could not send that DM to <@!${dmusr.id}>, this might be because they have DMs off or it was just a random error. Please try again later!`));
                    }
                }
                else
                {
                    msg.author.send("That user isn't in this Server! You can't DM them.");
                    console.log(`DM User not in Server.`);
                }
            })
        }
    }
}
