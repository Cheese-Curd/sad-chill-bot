module.exports = {
    "name": "rtd",
    "description": "Just like the good 'ol TF2 times! Except it's just a normal die.",
    execute(msg, args, config) {
        number = 6;
        number2 = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        msg.channel.send(number2.toString())
        console.log('RTD Number Selected is ' + number2)
    }
}