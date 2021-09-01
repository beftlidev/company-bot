//(B)cpu ya fazla baskı yapıyo kullanmadığın glitch projesi varsa archivelermisin? //(B) //(U)
const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const db = require("croxydb")
const {MessageButton} = require("discord-buttons")
exports.run = async (client, message, args) => {
 const embed = new MessageEmbed()
 .setDescription(`
 > <:kingcompany:882536207018496040> Normal Komutlar!
 k.başvuru [sunucu davet] - Companymize başvurmanızı sağlar.
 k.company-text - Company sunucularını gösterir.
 > <:kingcompany:882536207018496040> Company Üye Komutları!
 k.açıklama [açıklama] - Sunucunuza açıklama eklersiniz (Company üyelere özel komuttur).
 `)
 .setColor("BLURPLE") 
 message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'yardım'
}; 
