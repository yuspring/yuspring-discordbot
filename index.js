const Discord = require('discord.js');
const fs = require('fs');
const utils = require('util');
require('dotenv').config();

const PORT = 8000 || 80;
var server = app.listen(PORT, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is listening at http://%s:%s", host, port);
});


const { prefix } = require('./config.json');
const client = new Discord.Client('./client/client.js');
client.commands = new Discord.Collection();
client.bobocommands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands');
const bobotoucommandFiles = fs.readdirSync('./bobotou-commands');

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

for (const file of bobotoucommandFiles) {
    const bobocommand = require(`./bobotou-commands/${file}`);
    client.bobocommands.set(bobocommand.name, bobocommand);
}

console.log(client.commands);

client.on("ready", async() => {
    console.log(`${client.user.username} 上線了 `);
});



client.on('message', async message => {
    const msg = message.content;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (message.author.bot) return;

    if (msg == "波波波") {
        if (message.author.id != 325576441540378625) return;
        let filter = m => m.author.id == message.author.id
        message.channel.send("幹嘛").then(() => {
            message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 10000,
                    errors: ['time']
                })
                .then(message => {
                    message = message.first();
                    const args = message.content.split(' ');
                    client.bobocommands.get(args[0]).execute(message);
                })
                .catch(error => {
                    if (!utils.isError(error)) {
                        message.channel.send(`<@${message.author.id}> 你為什麼沒打指令QQ`);
                    }
                });
        })
    }

    if (!message.content.startsWith(prefix)) return;

    try {
        if (commandName == 'nick') {
            command.execute(client, message);
        } else {
            command.execute(message);
        }

    } catch (error) {
        message.channel.send('指令錯誤，請輸入正確的指令');
    }

});

client.login('NDQ5OTExNDA2NDU2ODY0Nzc4.WwlSpg.GKYXpxkHfqG8rCtlE4VTBGDkbkU');