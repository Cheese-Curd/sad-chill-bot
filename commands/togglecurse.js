module.exports = {
    "name": "tglcrse",
    "description": "Toggle Curse Words",
    execute(message, args) {
        let on = 0
        const config = require('../config.json')
        if(on == 1) {
            on = 0
            console.log(`${message.author.username} turned off cursing`)
        } else {
            on = 1
            console.log(`${message.author.username} turned on cursing`)
        }
        if(message.content.toLowerCase().includes(config.swears)) {
            if(on == 1) {
                message.reply(`Don't say curse words please!`)
            } else return;
        }
    }
}