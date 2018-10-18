const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN); NDk1Mjc4MzgwMjU0NjI1ODAz.Do_v1g.eFZfwQYjARyRJIZs5KVDDgFzhrc
