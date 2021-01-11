const { Message } = require("discord.js");

module.exports= {
    "name": "cheesequote",
    "description": "cheesequote",
    execute(message, args){
        console.log(`cheesequote Command Activated.`)
        // message.channel.send(botstate)
        number5 = 4;
        number6 = Math.floor(Math.random() * (number5 - 1 + 1)) + 1;
        if (number6 == '1') {
            message.channel.send(`**“You can’t make everyone happy. You’re not cheese.”**`);
            message.channel.send(`– Anonymous`);
        } else if (number6 == '2'){
            message.channel.send(`**“I just don’t see the point of not eating cheese. I mean, if God didn’t want us to eat cheese, would he have let man invent it?”**`);
            message.channel.send(`– Lisa Samson`);
        } else if (number6 == '3'){
            message.channel.send(`**“What happens to the hole when the cheese is gone?”**`);
            message.channel.send(`– Bertolt Brecht`);
        } else if (number6 == '4'){
            message.channel.send(`**“A silence fell at the mention of Gavard. They all looked at each other cautiously. As they were all rather short of breath by this time, it was the Camembert they could smell. This cheese, with its gamy odour, had overpowered the milder smells of the Marolles and the Limbourg; its power was remarkable. Every now and then, however, a slight whiff, a flute-like note, came from the Parmesan, while the Bries came into play with their soft, musty smell, the gentle sound, so to speak, of a damp tambourine. The Livarot launched into an overwhelming reprise, and the Géromé kept up the symphony with a sustained high note.”**`);
            message.channel.send(`– Émile Zola, The Belly of Paris`);
        } 
    }
}