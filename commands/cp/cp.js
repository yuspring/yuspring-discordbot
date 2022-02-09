const Discord = require('discord.js');
const { getUserFromMention } = require('../../utils/getUser.js');

module.exports = {
    name: 'cp',
    description: '一起組CP',
    execute(client, message) {
        const split = message.content.split(/ +/);
        const args = split.slice(1);

        if(args.length != 2){
            message.channel.send("不是兩個人:angry:");
            return;
        }

        let user1 = getUserFromMention(args[0], client);
        let user2 = getUserFromMention(args[1], client);
        
        if(user1.id == 449911406456864778 || user2.id == 449911406456864778){
            message.channel.send("不能跟西瓜組CP:angry:");
            return;
        }
        
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('感情狀況')
            .setDescription(`${user1.username}` + "和" + `${user2.username}` + "的感情狀況" )
            .addFields(
            {name: `CP`, value: ` ${user1.username}` + "和" + ` ${user2.username}` + "結為夫妻", inline: false},
            )
            .setTimestamp()
            .setFooter("每日關心" + `${user1.username}` + "和" + `${user2.username}` + "的感情狀況");
        
        message.channel.send(embed);      
        
    }
};