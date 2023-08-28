const config = require("./config.json")

function processCMD(cmd, args, slash, guild, msg)
{
    if (!slash)
    {
        if (args != undefined && args.length > 0)
            log(1, `${msg.author.username}#${msg.author.discriminator} ran the command $${cmd} with the argument(s) { ${args.join(", ")} }`)
        else
            log(1, `${msg.author.username}#${msg.author.discriminator} ran the command $${cmd}`)
    }

    switch (cmd)
    {
        case "ping":
            return 'Pong!';
        case "8ball":
            return config.ball[Math.floor(Math.random() * (config.ball.length - 1)) + 1];
        case "date":
            let dayNumb = 31;
		
            // year calculator \\
            const yearMax = new Date().getFullYear()
            const year = Math.floor(Math.random() * (yearMax - 1970 + 1)) + yym
            
            // month calculator \\
            const monthNumb = 12;
            const month = Math.floor(Math.random() * (monthNumb - 1 + 1)) + 1;
            
            // day calculator \\
            switch(m)
	    {
	    	case '4':
                case '6':
                case '9':
                case '11':
                    dayNumb = 30
                    break;
                case '2':
                    dayNumb = 28
                    break;
            }
            const day = Math.floor(Math.random() * (dayNumb - 1 + 1)) + 1;
            return `Your generated date is ${month}/${day}/${year}`;
        case "say":
            if (args.length < 1)
                return "Make sure to add text before you send that command!"
            return args.join(" ");
        case "flip":
            if (Math.floor(Math.random() * (2 - 1 + 1)) + 1 == '2') {
                if (config.debug)
                    log(4, `FAC Result is Head`)
                return 'The coin landed on `Heads`';
            } else {
                if (config.debug)
                    log(4, `FAC Result is Tails`)
                return 'The coin landed on `Tails`';
            }
        case "cheesequote":
            const index = Math.floor(Math.random() * ((config.quotes.length - 1) - 1 + 1)) + 1
            const quote = config.quotes[index];
            if (config.debug)
                log(4, `Quote Index: ${index}`)

            return `**“${quote["quote"]}”**\n- ${quote["author"]}`
        case "whois":
            var mbr = null
            if (!slash)
            {
                if (msg.mentions[0] != null)
                    mbr = msg.mentions[0]
                else
                    return "Please ping a user for this to work!"
            }
            else
            {
                if(args[0])
                    mbr = guild.fetchMembers(args[0])
                else
                    return "Please ping a user for this to work!"
            }
            if (config.debug)
            {
                log(4, `Username: ${mbr.username}`)
                log(4, `Discriminator: ${mbr.discriminator}`)
                log(4, `ID: ${mbr.id}`)
                log(4, `Bot?: ${mbr.bot ? "Yes" : "No"}`)
            }
            const whois =
            {
                title: `Who is this user?`,
                description: "Let's find out!",
                timestamp: new Date(),
                color: 0xFF33D1,
                fields: [
                    { name: "Username", value: mbr.username, inline: false },
                    { name: "Discriminator", value: mbr.discriminator, inline: false },
                    { name: "ID", value: mbr.id, inline: false },
                    { name: "Bot?", value: mbr.bot ? "Yes" : "No", inline: false }
                ]
            }
            return { content: "_ _", embed: whois }
        case "rtd":
            var max = 6
            if (args[0] != undefined)
            {
                if (Number.isFinite(parseInt(args[0])))
                {
                    if (config.debug)
                        log(4, `Finite Int: ${args[0]}`)
                    max = args[0]
                }
                else
                {
                    if (config.debug)
                        log(4, `NOT Finite Int: ${args[0]}`)
                    max = 6
                }
            }
            else
                max = 6
            return `*You rolled a D${max}*\nYou landed on ${Math.floor(Math.random() * (max - 1 + 1)) + 1}`
        default:
            if (config.debug)
                log(4, cmd)
            if (!config.cmdList.includes(cmd) && !config.oCmdList.includes(cmd))
                return `Sorry, I don't reconize the command $${cmd}.`;
            else
                return `Sorry, $${cmd} is a work in progress.`;
    }
}

function processSlashCMD(cmd, args, interaction, guild)
{
    if (args != undefined && args.length > 0)
        log(1, `${interaction.user.username}#${interaction.user.discriminator} ran the command $${cmd} with the argument(s) { ${args.join(", ")} }`)
    else
        log(1, `${interaction.user.username}#${interaction.user.discriminator} ran the command $${cmd}`)

    switch (cmd)
    {
        case "8ball":
        case "cheesequote":
        case "flip":
        case "ping":        // WHY
            processCMD(cmd);
            break;
        case "rtd":
        case "say":
        case "whois":
            processCMD(cmd, args, true, guild);
            break;
    }
}


function log(type = 0, data)
{
    if (type == 1) // info
        console.log(`${logDate()} | [INFO] ${data}`)
    else if (type == 2) // warn
        console.warn(`${logDate()} | [WARNING] ${data}`)
    else if (type == 3) // error
        console.error(`${logDate()} | [! ERROR !] ${data}`)
    else if (type == 4) // debug
        console.log(`${logDate()} | [DEBUG] ${data}`)
    else
        console.log(data)
}

function logDate() // god DAMN
{
    const date = new Date();
    return `${date.toLocaleDateString(undefined, {month:"2-digit", day:"2-digit", year:"2-digit"})} ${date.toLocaleTimeString(undefined, {hour12:false, hour:"2-digit", minute:"2-digit"})}`
}

exports.processCMD = processCMD;            // Processing Commands
exports.processSlashCMD = processSlashCMD;  // Processing Slash Commands
exports.log = log                           // Logging output, gives me a bit more info for if it's an error, warning, or just general information
