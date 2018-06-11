const Discord = require('discord.js'); 
constconst client = new Discord.Client(); 
client.on('ready', () => 
{ console.log(`Logged in as $
{client.user.tag}!`); }); 
client.on('message', msg => { if 
(msg.content === 'ping') { msg.reply('Pong!'); } }); 
client.login(process.env.Bot_token);
