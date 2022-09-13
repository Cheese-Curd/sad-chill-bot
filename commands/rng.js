module.exports = {
    "name": "rng",
    "description": "Rnadom number generator `Formated $rng <min> <max>`",
    execute(message, args) {
        let max = parseInt(args[1])
        let min = parseInt(args[0])
        if (isNaN(min) || isNaN(max)) {
            message.channel.send(`don't forget the min and max number lol`)
        } else {
            min = Math.ceil(min)
            max = Math.floor(max)
            message.channel.send(Math.floor(Math.random() * (max - min + 1)) + min)
        }
    }
}
