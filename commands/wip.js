module.exports = {
    "name": "WIP",
    "description": "WIP CMD",
    execute(message, args) {
        message.delete();
        message.author.send('THIS COMMAND IS IN BETA AND DOES NOT WORK, PLEASE DO NOT USE COMMAND UNTIL IT IS FINISED')
    }
}