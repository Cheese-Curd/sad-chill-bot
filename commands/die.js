module.exports = {
    "name": 'die',
    "description": `command "kills" the bot`,
    execute(message, args){
        console.log(`Die Command Activated.`)
        message.channel.send('$killme')
    }
}