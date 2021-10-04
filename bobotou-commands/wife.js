module.exports = {
    name: '老婆',
    description: '老婆wife',
    async execute(message) {
        let r = Math.random();
        
        if(message.author.id == 325576441540378625){
            message.channel.send(`春魚嗨嗨`);
            return; 
        }
        if(r > 0.5){
            message.channel.send(`我不是你老婆`);
        }
        else{
            message.channel.send(`逆走開`);
        }

    },
};