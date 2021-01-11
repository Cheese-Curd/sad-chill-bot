module.exports = {
  "name": "mony",
  "description": "mony",
  execute(message) {
    const mony = {
      files: ['https://cdn.discordapp.com/attachments/600730403103309845/720471916842057739/alien-holding-dollar-sign-illustration-vector-on-white-backgro-209842786.png']
    }
    console.log('Money Secret Command activiated.')
    message.channel.send('what the fuck is that', mony);
  }
}