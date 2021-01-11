module.exports = {
    "name": "dms",
    "description": "DM someone Scary Edition",
    execute(message, args) {
        const dmusr = message.mentions.users.first();
        if (!message.guild) {
            message.author.send(`bro you're not in a server lmao`)
        } else {
            const dmmbr = message.guild.member(dmusr);
            if (dmusr) {
                if (dmmbr) {
                    message.delete();
                    console.log(`${message.author.username} sent "I'm watching you...." to ${dmusr.username}`)
                    message.author.send(`sent 'I'm watching you....' to ${dmusr} ;3`)
                    dmusr.send("I'm watching you....");
                } else {
                    message.author.reply("That user isn't in this Server! You can't DM them.");
                    console.log(`DM User not in Server.`);
                }
            }
        }
        
    }
}