const { MessageAttachment } = require("discord.js");

module.exports = {
    name: 'littlecube',
    description: '小方塊',
    execute(message) {
        const Url = 'https://cdn.discordapp.com/avatars/582151572646133770/4f7ed76f9d0736f23f8cc0f60292149a.webp?size=256';
        message.channel.send(`大電神`, { files: [Url] });
    },
};