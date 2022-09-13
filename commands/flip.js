module.exports = {
    "name": "flip",
    "description": "'Hey Google, flip a coin.'",
    execute(msg, args) {
        number4 = 2;
        number3 = Math.floor(Math.random() * (number4 - 1 + 1)) + 1;
        if (number3 == '2') {
            console.log(`FAC Result is Head`)
            msg.channel.send('Heads');
        } else {
            console.log(`FAC Result is Tails`)
            msg.channel.send('Tails');
        }
    }
}