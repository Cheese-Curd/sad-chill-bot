module.exports =
{
	//////////////////////////////////////////////////////////////////////////
	// This code is written and sustained by Angel Bot of Vortex Polygonal. //
	//    For more information, see https://vortexpolygonal.tf/about.php    //
	//////////////////////////////////////////////////////////////////////////

    //nice, Angel -Trey

    "name": "showme",
    "description": "show me an item",
    execute(message, args)
	{
	    //WRITEN BY ANGEL\\
		if (args < 1)
		{
			message.channel.send(`Don't forget to add the item!`);
			return;
		}
        switch (args.join(` `).toLowerCase())
		{
			case `cheese`:
			{
				message.channel.send(`https://i.imgur.com/RlngTOV.jpg`);
				break;
			}
         case `nsfw`:
         {
             message.channel.send(`no you horny mother fucker`);
             break;
         }
         case `porn`:
         {
             message.channel.send(`no you horny mother fucker`);
             break;
         }
         case `hentai`:
         {
             message.channel.send(`no you horny mother fucker`);
             break;
         }
	        case `your code`:
			{
				message.channel.send(`https://github.com/Cheese-Curd/sad-chill-bot`);
			    break;
			}
			//WRITEN BY TREY\\
			case 'you': {
			    message.channel.send('hell no')
			    break;
			}
			case 'you shrugging': {
			    message.channel.send(`Okay... ¯\\_(ツ)_/¯`)
			    break;
			}
			case 'your address': {
			    messagd.channel.send(`dude what the fuckkkkk, I ain't givin' you my address`)
			}
			//WRITEN BY ANGEL\\
			default:
			{
				message.channel.send(`dafuq is that?`);
				break;
			}
		}
    }
}