module.exports = {
    "name": "invite",
    "description": "Get the invitation link to add the bot to your own server!",
    execute(msg, args, config) {
        const { EmbedBuilder } = require('discord.js');
      
        const invite = new EmbedBuilder()
          .setColor(0xff00dd)
          .setTitle('Invite')
          .setAuthor({ name: 'Eliana', iconURL: 'https://cdn.discordapp.com/attachments/726665166195916831/1017608834497388574/PFP.png', url: 'https://cheese-curd.github.io' }) // me =)
          .addFields(
            { name: `Here's the link!`, value: `Sorry, I can't get the link right now. Come back next time!` },
          )
          .setTimestamp()
        msg.author.send({ emebeds: [invite] })
    }
}
