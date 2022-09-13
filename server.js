const Discord = require('discord.js');
const
{
	Client,
	Attachment,
    GatewayIntentBits,
    EmbedBuilder,
    ActivityType
} = require('discord.js');
const bot = new Discord.Client(
{
    intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
],
});
const fs = require('fs');
const config = require("./config.json");
const token = fs.readFileSync('token.txt').toString().trim(); // Makes everyones life easier when putting this bot on GitHub ♥ | .trim() {thanks Angel/Chimera! ♥} fixes basic user errors and FS errors.
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}
const cmdList =
[
    "8ball",
    "date",
    "dm",
    "flip",
    "ping",
    "rtd"
]


bot.on('ready', () =>
{
	console.log(`Process started, no errors so far`);
    bot.user.setActivity('Eliana code me.', { type: ActivityType.Watching });
});

bot.on('messageCreate', msg => // holy shit this was so bad back when I wrote it originally
{
    if (msg.content.startsWith(config.prefix))
    {
        const args = msg.content.slice(config.prefix.length).split(/ +/); // I love stealing old code from myself :)
		const command = args.shift().toLowerCase(); 

        switch (command)
        {
            case "dm":
                bot.commands.get("wip").execute(msg, args);
                break;
            case "help": // WHY IS IT STUPID AAAAAAAAA-
                const help1 = new EmbedBuilder()
                    .setColor(0xff00dd)
                    .setTitle('Commands')
                    .setAuthor({ name: 'Eliana', iconURL: 'https://cdn.discordapp.com/attachments/726665166195916831/1017608834497388574/PFP.png', url: 'https://cheese-curd.github.io' }) // me =)
                    .addFields(
                        { name: 'Ping', value: `*${bot.commands.get("ping").description}*` },
                        { name: 'Help', value: `*Gives a list of commands.*` },
                        { name: 'Date', value: `*${bot.commands.get("date").description}*` },
                        { name: 'Flip', value: `*${bot.commands.get("flip").description}*` },
                        { name: 'RTD', value: `*${bot.commands.get("rtd").description}*` },
                        { name: 'DM', value: `*${bot.commands.get("wip").description}*` },
                        { name: '8ball', value: `*${bot.commands.get("8ball").description}*` }
                    )
                    .setTimestamp()
                msg.reply("Here are the commands!")
                msg.channel.send({ embeds: [help1] });
                break;
            default:
                if (cmdList.includes(command))
                    bot.commands.get(command).execute(msg, args);
                else
                {
                    if (config.debug)
                        console.debug('Unknown Command: ' + command);
                    msg.channel.send(`Sorry, I don't reconize the command $${command}.`)
                }
                break;
        }
    }
});

// End \\
if (config.debug) // Funky debug shid
{
    console.warn("DEBUG MODE IS ON!")
    console.debug(`Token: ${token}`); // Token in console
}

bot.login(token)