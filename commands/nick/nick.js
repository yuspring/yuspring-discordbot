module.exports = {
    name: 'nick',
    description: '匿名發言(限定在DM channel使用)',
    execute(client, message) {

        if (message.channel.type != 'dm') return message.channel.send(`請在DM channel上使用`);

        message.channel.send(`輸入你想匿名的留言`).then(() => {
            let filter = m => m.author.id == message.author.id
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ['time']

            }).then(message => {
                message = message.first();
                if (message.attachments.size == 0) {
                    client.channels.cache.get(`825729929673048135`).send(`匿名 ： ${message.content} \n ** ** `);
                    message.author.send('文字訊息已發送成功');

                } else {

                    const attached = new MessageAttachment(message.attachments.array()[0].url)
                    client.channels.cache.get(`825729929673048135`).send(`匿名：${message.content}`, (attached))
                    message.author.send('圖片訊息已發送成功');

                }
            }).catch(() => {
                message.channel.send(`逾時或指令錯誤`);
            });

        });
    },
};