module.exports = {
    "name": "spilledmilk",
    "description": "milk",
    execute(message, args) {
        const img = {
            files: ['https://media.discordapp.net/attachments/744309816393990289/751613934167130112/ezgif.com-add-text_1.gif?width=540&height=410']
        }
        console.log(`milk Command Activated.`)
        message.channel.send(img)
    }
}