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
                        dmusr.send("[USER REQUESTED] " + toSend); // sending the list as a string with spaces seperating the items
                    }
                    
                } else {
                    message.author.reply("That user isn't in this Server! You can't DM them.");
                    console.log(`DM User not in Server.`);
                }
            }
        }
    }
}