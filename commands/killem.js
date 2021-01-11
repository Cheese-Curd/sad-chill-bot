module.exports = {
    "name": 'killem',
    "description": `"kills" everyone`,
    execute(message, args){
        const deadppimg = {
            files: ['https://cdn.discordapp.com/attachments/586361415955251230/720084389576441926/medium.png']
        }
        console.log(`Killem Command Activated.`)
        // message.channel.send(botstate)
        message.channel.send(deadppimg)
        message.channel.send('@everyone, died oh god what are we going to do uhhhhhhhhhhhh UMM WHAT DO WE DO?')
    }
}