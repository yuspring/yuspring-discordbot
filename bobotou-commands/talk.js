module.exports = {
    name: 'talk',
    description: '聊天',
    async execute(message) {
        let res = false;
        const collector = message.channel.createMessageCollector(
            msg => msg.author.id == message.author.id,
            {
                time: 10000,
            }
        );
        
        for await (const msg of collector) {
            console.log(msg.content);
            res = true;
        }

        if(!res){
            message.channel.send(`<@${message.author.id}> 哼，不理你了`);
        }

    },
};