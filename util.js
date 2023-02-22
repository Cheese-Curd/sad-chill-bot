const config = require("./config.json")

function processCMD(cmd, args, msg)
{
    switch (cmd)
    {
        case "ping":
            return 'Pong!';
        case "8ball":
            return config.ball[Math.floor(Math.random() * (config.ball.length - 1)) + 1];
        case "date":
            let ddn = 31;
		
            // year calculator \\
            const yym = 1970
            const yyma = new Date().getFullYear()
            const yy = Math.floor(Math.random() * (yyma - yym + 1)) + yym
            
            // month calculator \\
            const mn = 12;
            const m = Math.floor(Math.random() * (mn - 1 + 1)) + 1;
            
            // day calculator \\
            switch(m) { 
                case '1':
                    ddn = 31
                    break;
                case '2':
                    ddn = 28
                    break;
                case '3':
                    ddn = 31
                    break;
                case '4':
                    ddn = 30
                    break;
                case '5':
                    ddn = 31
                    break;
                case '6':
                    ddn = 30
                    break;
                case '7':
                    ddn = 31
                    break;
                case '8':
                    ddn = 31
                    break;
                case '9':
                    ddn = 30
                    break;
                case '10':
                    ddn = 31
                    break;
                case '11':
                    ddn = 30
                    break;
                case '12':
                    ddn = 31
                    break;
            }
            const dd = Math.floor(Math.random() * (ddn - 1 + 1)) + 1;
            return `Your generated date is ${m}/${dd}/${yy}`;
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
            if (msg.mentions[0] != null)
            {
                if (config.debug)
                {
                    log(4, `Username: ${msg.mentions[0].username}`)
                    log(4, `Discriminator: ${msg.mentions[0].discriminator}`)
                    log(4, `ID: ${msg.mentions[0].id}`)
                    log(4, `Bot?: ${msg.mentions[0].bot ? "Yes" : "No"}`)
                }
                const whois =
                {
                    title: `Who is this user?`,
                    description: "Let's find out!",
                    timestamp: new Date(),
                    color: 0xFF33D1,
                    fields: [
                        { name: "Username", value: msg.mentions[0].username, inline: false },
                        { name: "Discriminator", value: msg.mentions[0].discriminator, inline: false },
                        { name: "ID", value: msg.mentions[0].id, inline: false },
                        { name: "Bot?", value: msg.mentions[0].bot ? "Yes" : "No", inline: false }
                    ]
                }
                return { embed: whois }
            }
            else
            {
                return "Please ping a user for this to work!"
            }
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

function log(type, data)
{
    if (type == 1) // info
        console.log(`[INFO] ${data}`)
    else if (type == 2) // warn
        console.warn(`[WARNING] ${data}`)
    else if (type == 3) // error
        console.error(`[! ERROR !] ${data}`)
    else if (type == 4) // debug
        console.log(`[DEBUG] ${data}`)
    else
        console.log(data)
}

exports.processCMD = processCMD; // Processing Commands
exports.log = log                // Logging output, gives me a bit more info for if it's an error, warning, or just general information