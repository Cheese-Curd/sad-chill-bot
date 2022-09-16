module.exports = {
    "name": "reset",
    "description": "Reset SCB. [Owner Only]",
    execute(msg, args, config, bot) {
        // Made by Angel Bot \\
        const {
          spawn
        } = require('child_process');
        const { count } = require('console');
        const childproc = process.argv.includes('--childproc');
        
        msg.channel.send('Got it!')
        function recreate(cmd = process.argv.shift(), args = process.argv) {
          bot.destroy();

          if (!args.includes('--childproc'))
            args.push('--childproc');
          var cp = spawn(cmd, args, { stdio: "inherit" });
          cp.on('close', (code) => {
            if (code == 1001) // process exited to reset
              recreate(cmd, args);
            else
              process.exit();
          });
        }

        if (childproc)
          setTimeout(() => { process.exit(1001) }, 0);
        else
          recreate();
    }
}
