const { getUserFromMention } = require('../utils/getUser');

module.exports = {
    name: 'userinfo',
    description: 'Get information about a user.',
    execute(client, message) {
        const split = message.content.split(/ +/);
        const args = split.slice(1);
        const user = getUserFromMention(args[0], client);
        message.channel.send(`名字: ${user.username}\n ID: ${user.id} \n`);
        message.channel.send(`創立時間: ${user.createdAt}\n `);

        console.log(user);

    }
};