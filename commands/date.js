module.exports= {
    "name": "date",
    "description": "date gen",
    execute(message, args){
        let ddn = 31;
		
		// year calculator \\
		const yym = 1906
		const yyma = 2021
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
		
		// send message and log it \\
        message.channel.send(`${m}/${dd}/${yy}`)
        console.log(`Random Date is ${m}/${dd}/${yy}`)
    }
}