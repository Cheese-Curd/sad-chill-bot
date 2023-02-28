const Eris = require("eris");
const Guild = require("eris");
const fs = require("fs")

const { processCMD, processSlashCMD, log } = require("./util.js");
const config = require("./config.json")
const token = fs.readFileSync('token.txt').toString().trim(); // Makes everyones life easier when putting this bot on GitHub ♥ | .trim() {thanks Angel/Chimera! ♥} fixes basic user errors and FS errors.

const EPHEMERAL_FLAG = 64; // fucking stupid -angel
const EPHEMERAL_CMDs = ["say"];

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
    createSlashCMD("8ball", "What will the magical 8ball say?", true,
    [
        {
            name: "question",
            description: "The question to ask the Magic 8ball.",
            type: 3,
            required: true
        }
    ]);
    createSlashCMD("rtd", "Just like the good 'ol TF2 times! Except it's just a normal die.", true
    [
        {
            name: "max",
            description: "The highest number you can roll. IE: 20 would roll a D20.",
            type: 4,
            required: false
        }
    ]);
    createSlashCMD("say", "Force SCB to say whatever you want her to say [Owner Only]", false,
    [
        {
            name: "message",
            description: "The message that will be sent.",
            type: 3,
            required: true
        }
    ]);
    createSlashCMD("whois", "Grab some data about someone, such as their ID or Discriminator (the numbers after the #)", false,
    [
        {
            name: "user",
            description: "The user you want information on",
            type: 6,
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
            argArray = [];
            if (interaction.data.options)                       // fuck
                for (wtf of interaction.data.options.values())  // never
                    argArray.push(wtf.value);                   // nesters
            if (config.oCmdList.includes(interaction.data.name))
            {
                if (config.whitelist.includes(interaction.member.user.id)) // TODO: Fix this!
                {
                    if (EPHEMERAL_CMDs.includes(interaction.data.name))
                    {
                        interaction.createMessage({content:"Okay!", flags:EPHEMERAL_FLAG})
                        bot.createMessage(interaction.channel.id, processCMD(interaction.data.name, argArray, true, Guild))
                    }
                    else
                        interaction.createMessage(processSlashCMD(interaction.data.name, argArray, interaction, Guild))
                }
                else
                {
                    if (config.debug)
                    {
                        log(4, `Channel Object: ${interaction.channel} Channel ID: ${interaction.channel.id}`)
                        log(4, `Interaction Args: ${argArray}`)
                        log(4, `Interaction User: ${interaction.member.user.id}`)
                    }
                }
            }
            else
            {
                interaction.createMessage(processSlashCMD(interaction.data.name, argArray, interaction, Guild))
            }
        }
        catch(error)
        {
            if (config.debug)
            {
                log(4, `Channel Object: ${interaction.channel} Channel ID: ${interaction.channel.id}`)
                log(4, `Interaction Args: ${argArray}`)
                // log(4, `Interaction User: ${interaction.member.user.id}`)
            }
            interaction.createMessage(`Uh Oh! An error has occured! Here's the error to send to the bot owner!\n**\`${error}\`**`)
            log(3, `Uh Oh! An error has occured!\n${error.stack}`)
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
                    bot.createMessage(msg.channel.id, processCMD(command, args, false, Guild, msg)) // jesus christ, this is so easy
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

function createSlashCMD(name, desc, dm = true, options = {})
{
    bot.createCommand({
        name: name,
        type: Eris.Constants.ApplicationCommandTypes.CHAT_INPUT, // Slash commands are chat input interactions
        description: desc,
        dm_permission: dm,
        options: options
    });
}

bot.connect(); // Get the bot to connect to Discord