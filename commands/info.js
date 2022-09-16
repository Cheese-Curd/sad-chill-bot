module.exports = {
    "name": "info",
    "description": "Get some info on the server and bot.",
    execute(msg, args, config, bot, embedSystem) {
      const { MessageActionRow, MessageButton } = require('discord.js');

      const arrows = new MessageActionRow().addCompontents(
        new MessageButton()
          .setCustomId("prev")
          .setLabel("Previous")
          .setStyle("DANGER"),
        new MessageButton()
          .setCustomId("next")
          .setLabel("Next")
          .setStyle("SUCCESS"),
      )
      if (msg.guild)
      {
        const sInfo = new embedSystem()
          .setColor(0xff00dd)
          .setTitle('Server Information')
          .setAuthor({ name: 'Eliana', iconURL: 'https://cdn.discordapp.com/attachments/726665166195916831/1017608834497388574/PFP.png', url: 'https://cheese-curd.github.io' }) // me =)
          .addFields(
            { name: 'Server', value: `*${bot.commands.get("ping").description}*` },
            { name: 'Member Count:', value: `*${bot.commands.get("ping").description}*` }
          )
          .setTimestamp()
      }
      const bInfo = new embedSystem()
        .setColor(0xff00dd)
        .setTitle('Bot Information')
        .setAuthor({ name: 'Eliana', iconURL: 'https://cdn.discordapp.com/attachments/726665166195916831/1017608834497388574/PFP.png', url: 'https://cheese-curd.github.io' }) // me =)
        .addFields(
          { name: 'Name', value: `*${bot.commands.get("ping").description}*` },
          { name: 'Commands', value: `*${bot.commands.get("ping").description}*` }
        )
        .setTimestamp()

      msg.channel.send({ content: "Test!", components: [arrows] });
    }
}
