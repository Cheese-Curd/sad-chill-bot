const {
	Client,
	Attachment
} = require('discord.js');
const bot = new Client();
const config = require('./config.json')
const token = config.token

bot.on('ready', () => {
	bot.user.setActivity('Code', {
		type: 'WATCHING'
	})
	bot.user.setStatus('dnd')
	console.log('BOT OFFLINE')
});

bot.login(token)