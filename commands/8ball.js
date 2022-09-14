module.exports = {
    "name": "8ball",
    "description": "What will the magical 8ball say?",
    execute(msg, args, config) {
        const quotes = config.ball
        
        if (config.debug)
            console.debug(`8ball args: ${args}`);
        if (args.length < 1)
            msg.channel.send("I'm not going to just shake it.");
        else
            msg.channel.send(quotes[Math.floor(Math.random() * (quotes.length - 1)) + 1]);
            
    }
}