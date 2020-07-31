// Const's / Var's
const config = require('./config.json')
const Discord = require('discord.js');
const {
	Client,
	Attachment
} = require('discord.js');
const bot = new Client();
const prefix = config.prefix
const botstate = '**WARNING** Bot unfinished Some things may not work!'
const watermelonimg = {
	files: ['https://cdn.glitch.com/1a2261c6-320b-4571-b7be-da17b36ac76f%2Fb76cc38a-c518-4fbc-be7e-926287ded139.image.png?v=1591686798503']
}
const deadppimg = {
	files: ['https://cdn.discordapp.com/attachments/586361415955251230/720084389576441926/medium.png']
}
const mony = {
	files: ['https://cdn.discordapp.com/attachments/600730403103309845/720471916842057739/alien-holding-dollar-sign-illustration-vector-on-white-backgro-209842786.png']
}
const version = 'BETA 1.0.8'
const token = config.token
const cmdsnmb = 15;
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
	.setFooter('By: Cheese Curd | Trey');

const invite = new Discord.MessageEmbed()
	.setAuthor('Version ' + version)
	.setTitle('Invite')
	.setDescription('How to Invite Sad Chill Bot')
	.setColor(0x1FFF00)
	.addField('1.', 'Click > https://bit.ly/3dVX4iO', true)
	.addField('2.', `Make A Role Called 'Kick/Ban Rights' And Give It Everyone You Want To Be Able To Kick/Ban`)
	.setFooter('By: Cheese Curd | Trey');
// End


// Startup Commands / Status Updater

const activities_list = [
	"for $help", 
	"for $help",
	"for $help",
	"for $help.",
	"Paint Dry.",
	"Paint Dry.",
    "for bugs.", 
	"bee's.",
	"bee's."
    ]; // creates an arraylist containing phrases you want your bot to switch through.

bot.on('ready', () => {
	console.log(`BOT STARTED | UPDATED`)
	setInterval(() => {
		const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
		bot.user.setActivity(activities_list[index], {
			type: 'WATCHING'
		}) // sets bot's activities to one of the phrases in the arraylist.
		console.log('UPDATED BOT STATUS')
	}, 10000); // Runs this every 10 seconds.
});

// bot.on('ready', () => {
// 	bot.user.setActivity('Paint Dry', {
// 		type: 'WATCHING'
// 	})
// 	console.log('UPDATED BOT STATUS')
// 	console.log('BOT STARTING')
// 	console.log(`BOT STARTED | UPDATED`)
// });

// creeper secret command By: Cheese Curd | Trey
bot.on('message', (message) => {
	if (message.content == 'creeper') {
		console.log('Creeper Secret Command activiated.')
		message.channel.send('Aw Man!');
		message.channel.send('So we back in the mine');
		message.channel.send('Got our pickaxe swinging from side to side');
		message.channel.send('Side-side to side');
		message.channel.send('This task, a grueling one');
		message.channel.send('Hope to find some diamonds tonight, night, night');
		message.channel.send('Diamonds tonight');
		message.channel.send('Heads up');
		message.channel.send('You hear a sound, turn around and look up');
		message.channel.send('Total shock fills your body');
		message.channel.send(`Oh, no, it's you again`);
		message.channel.send('I can never forget those eyes, eyes, eyes');
		message.channel.send('Eyes-eye-eyes');
		message.channel.send(`'Cause, baby, tonight`);
		message.channel.send(`The creeper's tryna steal all our stuff again`);
		message.channel.send(`'Cause, baby, tonight`);
		message.channel.send('You grab your pick, shovel, and bolt again (Bolt again-gain)');
		message.channel.send(`And run, run until it's done, done`);
		message.channel.send(`Until the sun comes up in the morn'`);
		message.channel.send(`'Cause, baby, tonight`);
		message.channel.send(`The creeper's tryna steal all our stuff again (Stuff again-gain)`);
		message.channel.send(`Just when you think you're safe`);
		message.channel.send(`Overhear some hissing from right behind`);
		message.channel.send(`Right-right behind`);
		message.channel.send(`That's a nice life you have`);
		message.channel.send(`Shame it's gotta end at this time, time, time`);
		message.channel.send(`Time-time-time-time`);
		message.channel.send(`Blows up`);
		message.channel.send(`Then your health bar drops and you could use a one-up`);
		message.channel.send(`Get inside, don't be tardy`);
		message.channel.send(`So, now you're stuck in there`);
		message.channel.send(`Half a heart is left, but don't die, die, die`);
		message.channel.send(`Die-die-die`);
		message.channel.send(`'Cause, baby, tonight`);
		message.channel.send(`The creeper's tryna steal all our stuff again`);
		message.channel.send(`'Cause, baby, tonight`);
		message.channel.send(`And run, run until it's done, done`);
		message.channel.send(`Until the sun comes up in the morn'`);
		message.channel.send(`'Cause, baby, tonight`);
		message.channel.send(`The creeper's tryna steal all our stuff again`);
		message.channel.send(`(Creepers, you're mine, haha)`);
		message.channel.send(`Dig up diamonds and craft those diamonds`);
		message.channel.send(`And make some armor, get it, baby`);
		message.channel.send(`Go and forge that like you so MLG pro`);
		message.channel.send(`The sword's made of diamonds, so come at me, bro, huh`);
		message.channel.send(`The sword's made of diamonds, so come at me, bro, huh`);
		message.channel.send(`Training in your room under the torchlight`);
		message.channel.send(`Every single day and the whole night`);
		message.channel.send(`Creeper's out prowlin', hoo, alright`);
		message.channel.send(`Look at me, look at you`);
		message.channel.send(`Take my revenge, that's what I'm gonna do`);
		message.channel.send(`I'm a warrior, baby, what else is new?`);
		message.channel.send(`And my blade's gonna tear through you, bring it`);
		message.channel.send(`'Cause, baby, tonight`);
		message.channel.send(`The creeper's tryna steal all our stuff again`);
		message.channel.send(`(Gather your stuff, yeah, let's take back the world)`);
		message.channel.send(`Yeah, baby, tonight (Haha)`);
		message.channel.send(`Grab your sword, armor and go (It's on)`);
		message.channel.send(`Take your revenge (Woo), oh-oh, oh-oh`);
		message.channel.send(`So fight, fight, like it's the last, last night`);
		message.channel.send(`Of your life, life, show them your bite (Woo)`);
		message.channel.send(`'Cause, baby, tonight`);
		message.channel.send(`The creeper's tryna steal all our stuff again`);
		message.channel.send(`'Cause, baby, tonight`);
		message.channel.send(`You grab your pick, shovel and bolt again (Bolt again-gain, woo)`);
		message.channel.send(`And run, run until it's done, done`);
		message.channel.send(`Until the sun comes up in the morn'`);
		message.channel.send(`'Cause, baby, tonight (Come on, swing your sword up high)`);
		message.channel.send(`The creeper's tryna steal all our stuff again (Come on, jab your sword down low)`);
		message.channel.send(`(Woo)`);
	}
});
// End

// Money secret command
bot.on('message', (message) => {
	if (message.content == '$') {
		console.log('Money Secret Command activiated.')
		message.channel.send('what the fuck is that', mony);
	}
});
// End

// Commands and Command Setup
bot.on('message', message => {
	// Make sure you have to start with the prefix at the time writing its '$'
	if (!message.content.startsWith(prefix))
		return;
	// idk what this does tbh please tell me ._.
	let args = message.content.slice(prefix.length).split(' ');
	console.log('Command Service Started.')
	// Commands!!!!
	switch (args[0]) {
		case 'invite':
			console.log(`Invite Command Activated.`)
			message.channel.send(invite)
			break;
		case 'die':
			console.log(`Die Command Activated.`)
			message.channel.send('$killme')
			break;
		case 'music':
			console.log(`Music Command Activated.`)
			message.channel.send(`no :3`)
			break;
		case 'test':
			console.log(`Test Command Activated.`)
			message.channel.send('this is a test command!')
			break;
		case 'info':
			console.log(`Info Command Activated.`)
			if (message.channel instanceof Discord.DMChannel) { //do not execute
			} else {
				const info = new Discord.MessageEmbed()
					.setTitle('Server Info')
					.setDescription('Server Info')
					.setColor(0x1FFF00)
					.addField('Server', message.guild.name, true)
					.addField('Server Members', message.guild.memberCount, true)
					.addField('Server Maker Name', message.guild.owner.nickname, true)
					.setFooter('By: Cheese Curd | Trey');
				const info2 = new Discord.MessageEmbed()
					.setTitle('Bot Info')
					.setDescription('Bot Info')
					.setColor(0xFF0000)
					.addField('Bot Name', bot.user.username, true)
					.addField('Commands', cmdsnmb, true)
					.addField('Servers In', bot.guilds) //<<< is broken please fix!!
					.setFooter('By: Cheese Curd | Trey');
				message.channel.send(info)
				message.channel.send(info2)
			}
			break;
		case 'killme':
			console.log(`Killme Command Activated.`)
			// message.channel.send(botstate)
			message.channel.send(deadppimg)
			message.reply('died oh god what are we going to do uhhhhhhhhhhhh UMM WHAT DO WE DO @everyone?')
			break;
		case 'killem':
			console.log(`Killem Command Activated.`)
			// message.channel.send(botstate)
			message.channel.send(deadppimg)
			message.channel.send('@everyone, died oh god what are we going to do uhhhhhhhhhhhh UMM WHAT DO WE DO?')
			break;
		case 'cbt':
			console.log(`CBT Command Activated.`)
			// message.channel.send(botstate)
			message.channel.send('Cock and ball torture (CBT), penis torture or dick torture is a sexual activity involving application of pain or constriction to the penis or testicles. This may involve directly painful activities, such as genital piercing, wax play, genital spanking, squeezing, ball-busting, genital flogging, urethral play, tickle torture, erotic electrostimulation or even kicking. The recipient of such activities may receive direct physical pleasure via masochism, or emotional pleasure through erotic humiliation, or knowledge that the play is pleasing to a sadistic dominant. Many of these practices carry significant health risks.')
			break;
		case 'cmds':
			console.log(`CMDS Command Activated.`)
			// message.channel.send(botstate)
			message.author.send(cmds)
			break;
		case 'ercodes':
			console.log(`ercodes Command Activated.`)
			// message.channel.send(botstate)
			message.channel.send('Error Code #0 : NO SUCH VAR / CONST WITH SAME NAME')
			break;
		case 'whatiswikipedia':
			console.log(`What is wikipedia Command Activated.`)
			// message.channel.send(botstate)
			message.channel.send('Wikipedia, the free online encyclopedia that ANYONE can edit! Wikipedias are places where people work together to write encyclopedias in different languages. We use Simple English words and grammar here. The Simple English Wikipedia is for everyone! That includes children and adults who are learning English. There are 164,324 articles on the Simple English Wikipedia. All of the pages are free to use. They have all been published under both the Creative Commons Attribution/Share-Alike License 3.0 and the GNU Free Documentation License. You can help here! You may change these pages and make new pages. Read the help pages and other good pages to learn how to write pages here. If you need help, you may ask questions at Simple talk.')
			break;
		case 'hlvr':
			// message.channel.send(botstate)
			console.log(`hlvr Command Activated.`)
			message.channel.send('https://www.youtube.com/playlist?list=PLglTodSj6fQGbLTtPF_YXVJ6TKSaC3O02')
			break;
		case 'watermelon':
			// message.channel.send(botstate)
			console.log(`Watermelon Command Activated.`)
			message.channel.send(':watermelon: **w   a   t   e   r   m   e   l   o   n** :watermelon:', watermelonimg)
			break;
		case 'rtd':
			// message.channel.send(botstate)
			number = 6;
			number2 = Math.floor(Math.random() * (number - 1 + 1)) + 1;
			message.channel.send(number2)
			console.log('RTD Number Selected is ' + number2)
			break;
		case 'fac':
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
			break;
		case 'kick':
			if (message.member.roles.cache.find(r => r.name === "Kick/Ban Rights")) {
				// Ignore messages that aren't from a guild \\
				if (!message.guild) return;
				// Assuming we mention someone in the message, this will return the user \\
				const user = message.mentions.users.first();
				const member = message.guild.member(user);
				// If we have a user mentioned \\
				if (user) {
					if (member) {
						member
							.kick('Kicked By: Sad Chill Bot')
							.then(() => {
								message.reply(`Successfully kicked ${user.tag}`);
								console.log(`Kicked ${user.tag}`)
							})
							.catch(err => {
								console.log(`Bot unable to kick member reason \/`)
								message.reply('I was unable to kick the member');
								console.error(err);
							});
					} else {
						message.reply("That user isn't in this Server!");
						console.log(`User not in Server.`)
					}
				} else {
					message.reply("You didn't mention the user to kick!");
					console.log(`User didn't mention user to kick.`)
				}
				break;
			} else {
				message.channel.send('You Do Not Have Permission.')
				console.log(`User Doesn't have Permission to kick.`)
			}
			break;
		case 'ban':
			if (message.member.roles.cache.find(r => r.name === "Kick/Ban Rights")) {
				// Ignore messages that aren't from a guild \\
				if (!message.guild) return;
				// Assuming we mention someone in the message, this will return the user \\
				const user2 = message.mentions.users.first();
				const member2 = message.guild.member(user2);
				// If we have a user mentioned \\
				if (user2) {
					if (member2) {
						member2
							.ban('Banned By: Sad Chill Bot')
							.then(() => {
								message.reply(`Successfully banned ${user2.tag}`);
								console.log(`Banned ${user2.tag}`)
							})
							.catch(err => {
								message.reply('I was unable to ban the member');
								console.log(`Bot unable to ban member reason \/`)
								console.error(err);
							});
					} else {
						message.reply("That user isn't in this Server!");
						console.log(`User not in Server.`)
					}
				} else {
					message.reply("You didn't mention the user to ban!");
					console.log(`User didn't mention user to ban.`)
				}
				break;
			} else {
				message.channel.send('You Do Not Have Permission.')
				console.log(`User Doesn't have Permission to ban.`)
			}
			break;
	}
});
// End \\

// Login \\
bot.login(token);
console.log(`Bot Logged in`)
