module.exports = {
    "name": 'rtd',
    "description": "roll the dice",
    execute(message, args){
        // message.channel.send(botstate)
        number = 6;
        number2 = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send(number2)
        console.log('RTD Number Selected is ' + number2)
    }
}

