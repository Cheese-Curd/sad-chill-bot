module.exports = {
    "name": "rng",
    "description": "Rnadom number generator `Formated $rng <min> <max>`",
    execute(message, args) {
        var max = parseInt(args[1]) // I used var, cry
        var min = parseInt(args[0])
        var config = require('../config.json')
        
        if (isNaN(min) || isNaN(max)) {
            if (config.debug)
                console.debug(`${msg.author.username} forgot to add min or max, args: ${arg}`)
            message.channel.send(`Don't forget the min and or max value!`)
        } else {
            min = Math.ceil(min)
            max = Math.floor(max)
            message.channel.send(Math.floor(Math.random() * (max - min + 1)) + min)
        }
    }
}
