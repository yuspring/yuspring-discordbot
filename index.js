const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();
client.commands = new Discord.Collection();
module.exports = client;

["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})

client.once("ready", async() => {
    console.log(`${client.user.username} 上線了 `);
})


client.login(process.env.TOKEN);