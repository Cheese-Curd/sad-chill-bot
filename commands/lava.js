module.exports = {
    "name": "lava",
    "description": "lava",
    execute(message, args) {
        const img = {
            files: ['./commands/images/lava-drink.png']
        }
        console.log(`Drink Lava Command Activated.`)
        message.channel.send(img)
    }
}