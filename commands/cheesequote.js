module.exports= {
  "name": "cheesequote",
  "description": "Get a motivational cheese quote. Yep those exist.",
  execute(msg, args){
    n1 = 4;
    n2 = Math.floor(Math.random() * (n1 - 1 + 1)) + 1;
    switch (n1)
    {
      case 1:
        msg.channel.send(`**“You can’t make everyone happy. You’re not cheese.”**`);
        msg.channel.send(`– Anonymous`);
      case 2:
        msg.channel.send(`**“I just don’t see the point of not eating cheese. I mean, if God didn’t want us to eat cheese, would he have let man invent it?”**`);
        msg.channel.send(`– Lisa Samson`);
      case 3:
        msg.channel.send(`**“What happens to the hole when the cheese is gone?”**`);
        msg.channel.send(`– Bertolt Brecht`);
      case 4:
        msg.channel.send(`**“A silence fell at the mention of Gavard. They all looked at each other cautiously. As they were all rather short of breath by this time, it was the Camembert they could smell. This cheese, with its gamy odour, had overpowered the milder smells of the Marolles and the Limbourg; its power was remarkable. Every now and then, however, a slight whiff, a flute-like note, came from the Parmesan, while the Bries came into play with their soft, musty smell, the gentle sound, so to speak, of a damp tambourine. The Livarot launched into an overwhelming reprise, and the Géromé kept up the symphony with a sustained high note.”**`);
        msg.channel.send(`– Émile Zola, The Belly of Paris`);
    } 
  }
}
