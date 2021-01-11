module.exports = {
    "name": 'killme',
    "description": `command "kills" you`,
    execute(message, args){
        const deadppimg = {
            files: ['https://cdn.discordapp.com/attachments/586361415955251230/720084389576441926/medium.png']
        }
        console.log(`Killme Command Activated.`)
		// message.channel.send(botstate)
		message.channel.send(deadppimg)
		message.reply('died oh god what are we going to do uhhhhhhhhhhhh UMM WHAT DO WE DO @everyone?')
    }
}