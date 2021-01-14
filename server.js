// Const's / Var's \\

const config = require('./config.json')
const fs = require('fs');
const Discord = require('discord.js');
const {
	Client,
	Attachment
} = require('discord.js');
const bot = new Client();
const prefix = config.prefix
const botstate = '**WARNING** Bot unfinished Some things may not work!'
const version = '1.1.5 B'
const token = config.token
const cmdsnmb = 15;
const whitelist = config.whitelist
bot.commands = new Discord.Collection();
bot.oocmds = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	
	bot.commands.set(command.name, command);
	
}
const oocmdsFiles = fs.readdirSync('./commands/owneronly/').filter(file => file.endsWith('.js'));
for (const file of oocmdsFiles) {
	const oocmd = require(`./commands/owneronly/${file}`);
	bot.oocmds.set(oocmd.name, oocmd);
}
// Reset things by: Angel Bot\\

const {
	spawn
} = require('child_process');
const childproc = process.argv.includes('--childproc');

// End \\

// Command CONSTS \\


// End \\

// Startup Commands / Status Updater

// const activities_list = [ // Only for when going through testing
// 	"Trey Test Me",
// 	"Trey Break me"
// ]
let activities_list = [
	"for $cmds",
	"for $cmds",
	"for $cmds",
	"for $cmds.",
	"Paint Dry.",
	"Paint Dry.",
	"for bugs.",
	"bee's.",
	"bee's.",
	"🇾🇴🇺....",
	"🇻🇪🇽🇮 🇸🇱🇪🇪🇵🇮🇳🇬... : )",
	"Trey sleeping 🥺",
	"Trey being happy for once",
	"Trey be a furry lol"
] // creates an arraylist containing phrases you want your bot to switch through.

// let activities_list = [
// 	"Trey being depressed",
// 	"Trey being depressed"
// ]

// let activities_list = [
// 	"for $cmds",
// 	"for $cmds",
// 	"for $cmds",
// 	"for $cmds.",
// 	"Paint Dry.",
// 	"Paint Dry.",
// 	"for bugs.",
// 	"bee's.",
// 	"bee's.",
// 	"🇾🇴🇺....",
// 	"🇻🇪🇽🇮 🇸🇱🇪🇪🇵🇮🇳🇬... : )",
// 	"Trey sleeping 🥺",
// 	"'Santa' getting the 'toys' ready for the 'children'"
// ] 

bot.on('ready', () => {
	console.log(`BOT STARTED | UPDATED`)

	setInterval(() => {
		const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
		bot.user.setActivity(activities_list[index], {
			type: 'WATCHING'
		}) // sets bot's activities to one of the phrases in the arraylist.
	}, 10000); // Runs this every 10 seconds.
});



// Made by Angel Bot \\

bot.on('message', (message) => {
	const lwrmsg = message.content.toLowerCase()
	if (lwrmsg == '$restart') {
		if (whitelist.includes(message.author.id)) {
			message.channel.send('Got it!')
			function recreate(cmd = process.argv.shift(), args = process.argv)
		{
			bot.destroy();
				
			if (!args.includes('--childproc'))
				args.push('--childproc');
			var cp = spawn(cmd, args, { stdio:"inherit" });
			cp.on('close', (code) =>
			{
				if (code == 1001) // process exited to reset
					recreate(cmd, args);
				else
					process.exit();
			});
		}

		if (childproc)
			setTimeout(() => { process.exit(1001) }, 0);
		else
			recreate();
		} else {
			message.reply(`Bro, why are you trying to restart a bot you don't own?`)
		}
	}
});

// secret commands By: Cheese Curd | Trey

bot.on('message', (message) => {
	const lwrmsg = message.content.toLowerCase()
	// creeper
	if (lwrmsg == 'creeper') {
		bot.commands.get('creeper').execute(message, );
	} else if (lwrmsg == '$') { // mony
		bot.commands.get('mony').execute(message);
	} else if (lwrmsg == `i love you <@!719386750266376203>`) { // I love you Sad Chill Bot <3
		bot.commands.get('love').execute(message);
	} else if (lwrmsg == `hello, world`) { // Hello, World
		if (message.author.bot) {
			message.channel.send('Shut')
		} else {
			message.channel.send('Hey! Why are you saying that your not a bot!')
		}
	} else if (lwrmsg == `the henry`) { // T h e   H e n r y
		message.channel.send('<:henrypog:747630090481041559>')
	} else if (lwrmsg == `is  <@!335592000902660096> stupid?`) { // I agree, Vexi is stupid
		message.channel.send(`Of course! Why wouldn't he be? He bullies Trey.`)
	} else if (message.content == `do you like me, <@!719386750266376203>?`) { // SCB probably doesn't
		let response = `Not at all`;
		if (Math.round(Math.random()) == 1) {
			response = `Yeah ig`;
		}
		message.channel.send(response)
	} else if (message.content == `Lmao, your code is weak, in comparison to mine!`) {
		message.channel.send(`You're wrong, mine is!`)
	} else if (lwrmsg.includes(`hahaha, i'd like to see you even try. :p`)) {
		message.channel.send(`Even though I get broken a lot doesn't mean I wont help you <@!778406900965965845>! <@!335592000902660096>, you are going down.`)
	} else if (message.content == `***AHHHHHHHHHHHHHHHHHHH***`) {
		message.channel.send(`*WHY ARE YOU SCREAMING AHHHHH*`)
	} else if (message.content == `<@!719386750266376203>, Heh, how hilarious, two poorly coded bots teaming up to make a super poorly coded bot. This is hilarious, I cannot stop laughing.`) {
		message.channel.send(`Uh, your mom, wait no uhhh oh! You're stupid!`)
	} else if (message.content == `***IDONTKNOW***`) {
		message.channel.send(`*Oh I see*`)
	} else if (lwrmsg.includes(`your mom`)) {
		if (!message.author.bot) {
			message.channel.send(`just saying, you mom looked really nice in bed last night`)
		} else {
			return;
		}
	} else if (lwrmsg == `hello child`) {
		if (message.author.id == "425380284192653315") {
			message.channel.send(`hello father`)
		} else {
			message.channel.send(`hello human`)
		}
	}
});
// End

// bot.on('message', (message) => {
// 	const lwrmsg = message.content.toLowerCase()
// 	const args = lwrmsg.slice('good night', 'goodnight', 'gn').split(/ +/);
// 	if (message.content == args) {
// 		console.log(args[1])
// 	}
// });
//<@!719386750266376203>, Heh, how hilarious, two poorly coded bots teaming up to make a super poorly coded bot. This is hilarious, I cannot stop laughing.


// Command Start \\

bot.on('message', message => {
	if (message.content.startsWith(prefix)) {

		const args = message.content.slice(prefix.length).split(/ +/)
		const command = args.shift()

		// wow i used a switch instead of a else if statement \\

		switch (command) {
			case `test`:
				bot.commands.get('test').execute(message, args);
				break;
			case `cbt`:
				bot.commands.get('cbt').execute(message, args);
				break;
			case `whatiswikipedia`:
				bot.commands.get('wikipedia').execute(message, args);
				break;
			case `rtd`:
				bot.commands.get('rtd').execute(message, args);
				break;
			case `fac`:
				bot.commands.get('fac').execute(message, args);
				break;
			case `watermelon`:
				bot.commands.get('melon').execute(message, args);
				break;
			case `killme`:
				bot.commands.get('killme').execute(message, args);
				break;
			case `killem`:
				bot.commands.get('killem').execute(message, args);
				break;
			case `cmds`:
				bot.commands.get('cmd').execute(message, args);
				break;
			case `hlvr`:
				bot.commands.get('hlvr').execute(message, args);
				break;
			case `ercodes`:
				bot.commands.get('ercodes').execute(message, args);
				break;
			case `info`:
				bot.commands.get('info').execute(message, args);
				break;
			case `invite`:
				bot.commands.get('invite').execute(message, args);
				break;
			case `kick`:
				bot.commands.get('kick').execute(message, args);
				break;
			case `ban`:
				bot.commands.get('ban').execute(message, args);
				break;
			case `music`:
				bot.commands.get('music').execute(message, args);
				break;
			case `die`:
				bot.commands.get('die').execute(message, args);
				break;
			case `drinklava`:
				bot.commands.get('lava').execute(message, args);
				break;
			case `cheesequote`:
				bot.commands.get('cheesequote').execute(message, args);
				break;
			case `spilledmilk`:
				bot.commands.get('spilledmilk').execute(message, args);
				break;
			case `dm`:
				bot.commands.get('dm').execute(message, args);
				break;
			case `scare`:
				bot.commands.get('dms').execute(message, args);
				break;
			case `test2`:
				message.channel.send(`bro that's f-cking cringe`)
				break;
			case `say`:
				bot.oocmds.get('say').execute(message, args);
				break;
			case `oocmds`:
				bot.oocmds.get('cmds').execute(message, args);
				break;
			case `togglecurse`:
				bot.commands.get('tglcrse').execute(message, args);
				break;
			case `nut`:
				number4 = 2;
				number3 = Math.floor(Math.random() * (number4 - 1 + 1)) + 1;
				if (number3 == '2') {
					message.channel.send(`no <3`)
				} else {
					message.channel.send(`I ain't gay mate`)
				}
				break;
			case `csmusiclist`:
				message.channel.send(`https://www.youtube.com/watch?v=UXcN7gLaI20&list=PLFZMDN6KfQNjrnvaoD28e4D_8tkJWAZXl`)
				break;
			case `musiclist`:
				message.channel.send(`__***WARNING THIS HAS SOME NOT KID FRIENDLY MUSIC WATCH AT YOUR OWN RISK***__\n\n||https://www.youtube.com/watch?v=LxyDknaCpq8&list=PLFZMDN6KfQNiUgPQzgfFZML1eI8qenVwQ||`)
				break;
			case `whois`:
				bot.commands.get(`whois`).execute(message, args)
				break;
			default:
				message.channel.send(`what tf does that do lmao`);
		}
	} else {
		return;
	}
});
// End \\

// Login \\
bot.login(token);
console.log(`Bot Logged in`)