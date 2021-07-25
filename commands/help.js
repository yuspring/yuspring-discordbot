const fs = require('fs')

module.exports = {
    name: 'help',
    description: '所有指令的清單',
    execute(message) {
        let str = '';
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            str += `名字: ${command.name}, 介紹: ${command.description} \n`;
        }
        message.channel.send(str);
    },
};