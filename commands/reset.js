module.exports = {
    "name": "reset",
    "description": "Reset SCB. [Owner Only]",
    execute(message, args, config, bot) {
        // Made by Angel Bot \\
        message.channel.send('Got it!')
        function recreate(cmd = process.argv.shift(), args = process.argv) {
          bot.destroy();

          if (!args.includes('--childproc'))
            args.push('--childproc');
          var cp = spawn(cmd, args, { stdio: "inherit" });
          cp.on('close', (code) => {
            if (code == 1001) // process exited to reset
              recrheate(cmd, args);
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
    }
}
