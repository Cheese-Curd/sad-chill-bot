module.exports= {
    "name": "ercodes",
    "description": "error codes",
    execute(message, args){
        console.log(`ercodes Command Activated.`)
        // message.channel.send(botstate)
        message.channel.send('Error Code #0 : NO SUCH VAR / CONST WITH SAME NAME')
    }
}