module.exports = {
    "name": "fac",
    "description": "flip a coin",
    execute(message, args) {
        // message.channel.send(botstate)
        number4 = 2;
        number3 = Math.floor(Math.random() * (number4 - 1 + 1)) + 1;
        if (number3 == '2') {
            console.log(`FAC Result is Head`)
            message.channel.send('Heads');
        } else {
            console.log(`FAC Result is Tails`)
            message.channel.send('Tails');
        }
    }
}