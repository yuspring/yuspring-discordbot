const { MessageAttachment } = require("discord.js");

module.exports = {
    name: 'cuicui',
    description: '銅五C學弟',
    execute(message) {
        const Url = 'https://i.imgur.com/WGvaEiE.jpg';
        message.channel.send(`銅五又想C學弟了`, { files: [Url] });
    },
};