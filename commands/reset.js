module.exports = {
    "name": "say",
    "description": "make the bot speak",
    execute(message, args) {
        let msg = args; // making a new variable with the argument list
        const toSend = msg.join(" ");
        if (message.author.id == "425380284192653315") {
            message.delete();
            message.channel.send(`__**Owner Only Commands**__`)
            message.channel.send(`> 1. %say | Say anything as SCB`)
        } else {
            message.delete();
            console.log(`${message.author.username} tried to look at Owner Only Commands`);
            message.author.send(`bro, you can't even do those lmao`)
        }
    }
}