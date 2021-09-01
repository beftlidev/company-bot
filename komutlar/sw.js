
const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
exports.run = async (client, message, args) => {
message.channel.send(`Space Giveaway Support ${client.guilds.cache.get("752164000418234448").memberCount} kişi!`)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'sw'
}; 
