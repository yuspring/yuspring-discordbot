module.exports = {
    name: 'purge',
    description: '波波頭專屬',
    async execute(message) {

        const args = message.content.split(' ');
        let Count = 0;

        if (!isNaN(args[1])) {
            Count = parseInt(args[1], 10);
        }

        if (Count < 2 || Count > 100)
            return message.reply('請輸入適當的數字(2~100)');

        const fetched = await message.channel.messages.fetch({
            limit: Count,
        });

        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`不能刪除訊息QQ\n 原因: ${error}`));

    },
};