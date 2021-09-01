
const Discord = require('discord.js');
const db = require("croxydb")
exports.run = async (client, message, args) => {
  if (!args[0]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(
            "<:codesty_support:844468556430704640> Bir açıklama belirt!"
          )
          .setTimestamp()
      );
    }
 db.set(`aciklama_${message.author.id}`, args.slice(0).join(" "))
  message.channel.send(`Sunucun için açıklama ayarlandı!`)
};
exports.conf = {

  aliases: []

};
 
exports.help = {
  name: 'açıklama'
}; 