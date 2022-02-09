module.exports = {
    name: 'ch4',
    description: '甲烷C學長',
    execute(client, message) {
        const Url = 'https://i.imgur.com/CLArmwZ.png';
        message.channel.send(`甲烷又想C學長了`, { files: [Url] });
    },
};