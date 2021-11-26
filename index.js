//include套件

const Discord = require('discord.js');
const fs = require('fs');
const utils = require('util');
require('dotenv').config();

const { prefix } = require('./config.json');
const client = new Discord.Client('./client/client.js');

//--------------------------------------------------------------------------------


//heroku 呼叫
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 8000));
app.get('/', function(_request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port', app.get('port'));
});

//--------------------------------------------------------------------------------


//一般指令設定
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands');
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//--------------------------------------------------------------------------------

//波波頭指令設定
client.bobocommands = new Discord.Collection();
const bobotoucommandFiles = fs.readdirSync('./bobotou-commands');
for (const file of bobotoucommandFiles) {
    const bobocommand = require(`./bobotou-commands/${file}`);
    client.bobocommands.set(bobocommand.name, bobocommand);
}

//--------------------------------------------------------------------------------


//啟動時的console.log
client.on("ready", async() => {
    console.log(`${client.user.username} 上線了 `);
});

//--------------------------------------------------------------------------------

const trigger = ['機率', '波波波'];
const cmdName = ['nick' , 'userinfo', 'cp'];

//--------------------------------------------------------------------------------


//主要指令

client.on('message', async message => {

    const msg = message.content;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (message.author.bot) return;

    if(msg.indexOf(trigger[0]) != -1){
        message.channel.send(`${Math.floor(Math.random()*100)}%`);
        return;
    }

    if (msg == trigger[1]) {
        //if (message.author.id != 325576441540378625) return;
        let filter = m => m.author.id == message.author.id
        message.channel.send("幹嘛").then(() => {
            message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 15000,
                    errors: ['time']
                })
                .then(message => {
                    message = message.first();
                    const args = message.content.split(' ');
                    
                    if(args[0] == '自我介紹'){
                        client.bobocommands.get('introduce').execute(message);
                    }
                    else{
                        client.bobocommands.get(args[0]).execute(message);
                    }
                })
                .catch(error => {
                    if (!utils.isError(error)) {
                        message.channel.send(`<@${message.author.id}> 哼，不理你了`);
                    }
                });
        })
    }

    if (!message.content.startsWith(prefix)) return;

    try {
        if (cmdName.includes(commandName)){
            command.execute(client, message);
        }
        else{
            command.execute(message);
        }
    } catch(error) {
        console.log(error);
    }

});

client.login(process.env.TOKEN);