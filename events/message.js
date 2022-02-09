const client = require('../index.js');
const math = require('../utils/math.js')
const msg = require('../utils/msgprocess.js')
const { prefix } = require('../config.json');


client.on('message', async message =>{

    if(message.author.bot) return;

    const command = client.commands.get(msg.str_process(message.content, prefix.length));
    
    if(msg.have_chance(message.content)){
        message.channel.send(`${math.randomINT(101)}%`);
        return;
    }

    if (!message.content.startsWith(prefix)) return;

    try {
        command.execute(client, message);
    } 
    catch(error) {
        console.log(error);
    }

})