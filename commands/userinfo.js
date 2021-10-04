const Discord = require('discord.js');
const { getUserFromMention } = require('../utils/getUser');

module.exports = {
    name: 'userinfo',
    description: '得到一個人的資訊',
    execute(client, message) {
        const split = message.content.split(/ +/);
        const args = split.slice(1);
        //const user = getUserFromMention(args[0], client);
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])).user;
        let userguild = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        //console.log(message.guild);
        console.log(message.guild.roles);
        console.log(user.avatarURL)

        
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('個人資訊')
            .setDescription(`關於 ${user.username}` + '#' + user.discriminator )
            .setThumbnail(`${user.displayAvatarURL({ size: 256})}`)
            .addFields(
            {name: `帳號ID`, value: `${user.id}`, inline: false},
            {name: `創立時間`, value: `${user.createdAt.toDateString('en-US', { timeZone: 'Asia/Taipei' })}`, inline: false},
            {name: `進群時間`, value: `${userguild.joinedAt.toDateString('en-US', { timeZone: 'Asia/Taipei' })}`, inline: false},
            )
            .setTimestamp()
            .setFooter(`${user.username}`+ "的個人資訊" , `${user.displayAvatarURL({ size: 256})}`);
        
        message.channel.send(embed);      
        
    }
};