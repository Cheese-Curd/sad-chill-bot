module.exports= {
    "name": "invite",
    "description": "invite",
    execute(message, args){
        const version = '1.1.5 B'
        const Discord = require('discord.js');
        const invite = new Discord.MessageEmbed()
            .setAuthor('Version ' + version)
            .setTitle('Invite')
            .setDescription('How to Invite Sad Chill Bot')
            .setColor(0x1FFF00)
            .addField('1.', 'Click > https://bit.ly/3dVX4iO', true)
            .addField('2.', `Make A Role Called 'Kick/Ban Rights' And Give It Everyone You Want To Be Able To Kick/Ban`)
            .setFooter('By: Cheese Curd | Trey');
        console.log(`Invite Command Activated.`)
        message.channel.send(invite)
    }
}

