module.exports = {
    "name": "whois",
    "description": "Grab some data about someone, such as their ID or Discriminator (the numbers after the #)",
    execute(msg, args, config, bot, embedSystem) {
        const dmusr = msg.mentions.users.first();
        const EmbedBuilder = require('discord.js');
        if (!msg.guild) {
            msg.author.send(`bro you're not in a server lmao`)
        } else {
            if (dmusr) {
                const whois = new EmbedBuilder()
                    .setColor(0xff00dd)
                    .setTitle('Commands')
                    .setAuthor({ name: 'Eliana', iconURL: 'https://cdn.discordapp.com/attachments/726665166195916831/1017608834497388574/PFP.png', url: 'https://cheese-curd.github.io' }) // me =)
                    .addFields(
                        { name: 'Username:', value: dmusr.username },
                        //  { name: 'Nickname:', value: dmusr.nickname },
                        { name: 'Bot?', value: dmusr.bot ? `Yes` : `No` },
                        { name: 'Discriminator:', value: dmusr.discriminator },
                        { name: 'ID:', value: dmusr.id }
                    )
                    .setTimestamp()
                msg.channel.send(whois);
            } else {
                msg.channel.send("Make sure to add a ping before you send that command!")
            }
        }
    }
}