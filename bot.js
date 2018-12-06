const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("520271442688868354")
setInterval(function() {
channel.send(`medospam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
