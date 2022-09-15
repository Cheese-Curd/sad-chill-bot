module.exports = {
    "name": "info",
    "description": "Get some info on the server and bot.",
    execute(message, args, config, bot, embedSystem) {
      const info = embedSystem
        .setColor(0xff00dd)
        .setTitle('Commands')
        .setAuthor({ name: 'Eliana', iconURL: 'https://cdn.discordapp.com/attachments/726665166195916831/1017608834497388574/PFP.png', url: 'https://cheese-curd.github.io' }) // me =)
        .addFields(
          { name: 'Ping', value: `*${bot.commands.get("ping").description}*` },
          { name: 'Help', value: `*Gives a list of commands.*` },
          { name: 'Date', value: `*${bot.commands.get("date").description}*` },
          { name: 'Flip', value: `*${bot.commands.get("flip").description}*` },
          { name: 'RTD', value: `*${bot.commands.get("rtd").description}*` },
          { name: 'DM', value: `*${bot.commands.get("dm").description}*` },
          { name: '8ball', value: `*${bot.commands.get("8ball").description}*` },
          { name: 'RNG', value: `*${bot.commands.get("rng").description}*` },
          { name: 'CheeseQuote', value: `*${bot.commands.get("cheesequote").description}*` },
          { name: 'Say', value: `*${bot.commands.get("say").description}*` },
          { name: 'WhoIs', value: `*${bot.commands.get("whois").description}*` },
          { name: 'Reset', value: `*${bot.commands.get("reset").description}*` }
        )
        .setTimestamp()
    }
}
