const Eris = require("eris");
const Guild = require("eris");
const fs = require("fs")

const { processCMD, log } = require("./util.js");
const config = require("./config.json")
const token = fs.readFileSync('token.txt').toString().trim(); // Makes everyones life easier when putting this bot on GitHub ♥ | .trim() {thanks Angel/Chimera! ♥} fixes basic user errors and FS errors.

// lol, thanks @type. I have suggestions now
/**
 * @type {Eris.Client}
 */
const bot = new Eris(token, {
    intents: [
        "all" // YEAHHHHHH ERIS FOR THE WIN BRO
    ]
});

bot.on("ready", () => { // When the bot is ready
    log(1, `VERSION: ${config.version}`)
    bot.editStatus("dnd", [ { name: "Eliana code!", type: 3 } ])

    createSlashCMD("ping", "A basic test command that pretty much everyone uses.");
    createSlashCMD("flip", "'Hey Google, flip a coin.'");
    createSlashCMD("cheesequote", "Get a motivational cheese quote. Okay maybe not motivational.");
    createSlashCMD("8ball", "What will the magical 8ball say?",
    [
        {
            name: "question",
            description: "The question to ask the Magic 8ball.",
            type: 3,
            required: true
        }
    ]);
    createSlashCMD("rtd", "Just like the good 'ol TF2 times! Except it's just a normal die.",
    [
        {
            name: "max",
            description: "The highest number you can roll. IE: 20 would roll a D20.",
            type: 4,
            required: false
        }
    ]);
    createSlashCMD("say", "Force SCB to say whatever you want her to say [Owner Only]",
    [
        {
            name: "message",
            description: "The message that will be sent.",
            type: 3,
            required: true
        }
    ]);
    
    log(1, `Process started, no errors so far`);
});

bot.on("error", (err) => {
  log(3, `Uh Oh! An error has occured!\n${err}`); // or your preferred logger
});

bot.on("interactionCreate", interaction => {
    if (interaction instanceof Eris.CommandInteraction) // Make sure this is a Command Interaction
    {
        try // Catch any errors
        {
            if (config.oCmdList.includes(interaction.data.name))
            {
                // if (config.whitelist.includes(interaction.member.user.id)) // TODO: Fix this!
                // {
                //     // // interaction.createMessage("_ _")
                //     // log(1, interaction.data.options.values)
                //     // bot.createMessage(interaction.channel.id, processCMD(interaction.data.name, Array.from(interaction.data.options.values)))

                //     interaction.createMessage("I'm sorry, slash commands are in a **HEAVY** work in progress right now!")
                // }
                // else
                // {
                //     if (config.debug)
                //     {
                //         log(1, `Channel Object: ${interaction.channel} Channel ID: ${interaction.channel.id}`)
                //         // log(1, `Interaction Options: ${interaction.data.options.values("WHAT DO I PUT IN  YOU")}`)
                //         log(1, `Interaction User: ${interaction.member.user.id}`)
                //     }
                //     bot.createMessage(interaction.channel.id, "I'm sorry, you don't meet the requirements to run this command!")
                // }
                interaction.createMessage("I'm sorry, slash commands are in a **HEAVY** work in progress right now!")
            }
            else
            {
                interaction.createMessage(processCMD(interaction.data.name, {}))
            }
        }
        catch(error)
        {
            if (config.debug)
            {
                // log(1, `Channel Object: ${interaction.channel} Channel ID: ${interaction.channel.id}`)
                // log(1, `Interaction Options: ${interaction.data.options.values("WHAT DO I PUT IN  YOU")}`)
                // log(1, `Interaction User: ${interaction.member.user.id}`)
            }
            interaction.createMessage(`Uh Oh! An error has occured! Here's the error to send to the bot owner!\n**\`${error}\`**`)
            log(3, `Uh Oh! An error has occured!\n${error}`)
        }
    }
})

bot.on('messageCreate', msg =>
{
	if (msg.content.startsWith(config.prefix))
	{
		const args = msg.content.slice(config.prefix.length).split(/ +/); // I love stealing old code from myself :)
		const command = args.shift().toLowerCase(); 

        bot.sendChannelTyping(msg.channel.id)
        if (config.debug)
            log(4, `${msg.author.username} requested the $${command} command.`)
        setTimeout(() => {
            if (command == "")
                bot.createMessage(msg.channel.id, "what the fuck is that", [ { name: "mony.png", file: fs.readFileSync('./images/mony.png') } ]); // "funny" secret, I guess
            else
                if (command == "checkping") // Have to put this here so I can make the bot edit the message and get the message in general!
                    bot.createMessage(msg.channel.id, "Hold on!").then((message) => {
                        const ping = message.createdAt - msg.createdAt
                        bot.editMessage(msg.channel.id, message.id, `Your ping is \`${ping}ms\`.`)
                    })
                else
                    bot.createMessage(msg.channel.id, processCMD(command, args, msg)) // jesus christ, this is so easy
        }, 300);
	}
});


// End \\
if (config.debug) // Funky debug shid
{
	log(2, "DEBUG MODE IS ON!")
    log(4, `Commands: [ ${config.cmdList.join(", ")} ]`)
    log(4, `Owner Commands: [ ${config.oCmdList.join(", ")} ]`)
    log(4, `Whitelist IDs: [ ${config.whitelist.join(", ")} ]`)
	log(4, `Token: ${token}`); // Token in console
}

function createSlashCMD(name, desc, options)
{
    if (options != null)
    {
        bot.createCommand({
            name: name,
            type: Eris.Constants.ApplicationCommandTypes.CHAT_INPUT,
            description: desc,
            options: options
        });
    }
    else
    {
        bot.createCommand({
            name: name,
            type: Eris.Constants.ApplicationCommandTypes.CHAT_INPUT,
            description: desc
        });
    }
}

bot.connect(); // Get the bot to connect to Discord