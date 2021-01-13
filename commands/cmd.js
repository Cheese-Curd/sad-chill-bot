

module.exports= {
    "name": "cmd",
    "description": "commands",
    execute(message, args){
		const version = '1.1.5 B'
		const Discord = require('discord.js');
		const cmds = new Discord.MessageEmbed()
			.setAuthor('Version ' + version)
			.setTitle('Commands')
			.setDescription('The Commands (These will update every update!)')
			.setColor(0x1FFF00)
			.addField('$watermelon', 'Sends a picture of a watermelon.', true)
			.addField('$cbt', `Co- wait I Can't Say That? Darn.`, true)
			.addField('$whatiswikipedia', 'What is it?', true)
			.addField('$ercodes', 'Error Codes Duh.', true)
			.addField('$hlvr', 'Half - Life VR But The A.I. Is Self Aware.', true)
			.addField('$rtd', 'Roll The Dice.', true)
			.addField('$fac', 'Flip A Coin.', true)
			.addField('$killme', 'Fixed Bug Where You Died IRL', true)
			.addField('$die', '*Kill* The Bot?', true)
			.addField('$kick', '[RESRICTED TO BAN/KICK RIGHTS] Kicks A Member.', true)
			.addField('$ban', '[RESRICTED TO BAN/KICK RIGHTS] Bans A Member.', true)
			.addField('$killem', 'Fixed Bug Where Everyone Died IRL', true)
			.addField('$invite', 'Invite the bot.', true)
			.addField('$info', 'Sends Server and Bot Info.', true)
			.addField(`$music`, `Plays music ;)`, true)
			.addField(`$drinklava`, `please don't hurt him`, true)
			.addField(`$cheesequote`, `says a quote about cheese *(do not press if lactose intolerant may have side effects)*`, true)
			.addField(`$spilledmilk`, `haha milk go brrrrrrrrrrrrrrrrrrrrrr`, true)
			.addField(`$scare`, `scares someone you ping ;3`, true)
			.addField(`$dm`, `DMs a user you ping`, true)
			.addField(`$whois`, `Get some info on someone you ping (not their IP you onion)`, true)
			.addField(`$musiclist`, `Trey's fav music`, true)
			.addField(`$csmusiclist`, `Child Safe Version of the $musiclist command`, true)
			.setFooter('By: Cheese Curd | Trey');
		console.log(`CMDS Command Activated.`)	
		// message.channel.send(botstate)
		message.author.send(cmds)
    }
}