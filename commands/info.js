module.exports = {
    "name": "info",
    "description": "Get some info on the server and bot.",
    execute(msg, args, config, bot, embedSystem) {
      const { EmbedBuilder } = require('discord.js');

      // const arrows = new MessageActionRow().addCompontents(
      //   new MessageButton()
      //     .setCustomId("prev")
      //     .setLabel("Previous")
      //     .setStyle("DANGER"),
      //   new MessageButton()
      //     .setCustomId("next")
      //     .setLabel("Next")
      //     .setStyle("SUCCESS"),
      // )
      if(config.debug)
        console.debug(`Bot Username: ${bot.username} | Commands: ${config.cmdList.length + config.oCmdList.length}`)
      if (msg.guild)
      {
        const sInfo = new EmbedBuilder()
          .setColor(0xff00dd)
          .setTitle('Server Information')
          .setAuthor({ name: 'Eliana', iconURL: 'https://cdn.discordapp.com/attachments/726665166195916831/1017608834497388574/PFP.png', url: 'https://cheese-curd.github.io' }) // me =)
          .addFields(
            { name: 'Server', value: msg.guild.name },
            { name: 'Member Count', value: msg.guild.memberCount }
          )
          .setTimestamp()
      }
      const bInfo = new EmbedBuilder()
        .setColor(0xff00dd)
        .setTitle('Bot Information')
        .setAuthor({ name: 'Eliana', iconURL: 'https://cdn.discordapp.com/attachments/726665166195916831/1017608834497388574/PFP.png', url: 'https://cheese-curd.github.io' }) // me =)
        .addFields(
          { name: 'Name', value: bot.username }, // fuck youfuck youfuck youfuck youfuck youfuck youfuck youfuck youfuck youfuck youfuck youfuck you
          { name: 'Commands', value: config.cmdList.length + config.oCmdList.length }
        )
        .setTimestamp()

        msg.channel.send({ content: "Test!", /* components: [arrows] */ embeds: [sInfo, bInfo] });
    }
}
