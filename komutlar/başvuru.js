//(B)knk başvuru logda bu bilgiler olmasın başvuru kontrol diye bir kanal daha olsun başvuru logda sadece başvuran kişi ve sunucu ismi olsun  //(U)ok
const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const db = require("croxydb")
const {MessageButton} = require("discord-buttons")
exports.run = async (client, message, args) => {
  
const args1 = new MessageEmbed()
.setDescription("Bir sunucu davet bağlantısı belirtmelisin!")
.setColor("RED")

  if (!args[0]) {
    return message.channel.send(args1)
  }
 
  (async()=>{
var sw = await client.fetchInvite(args[0])
return client.channels.cache.get("882536794430791701").send(new MessageEmbed().addField("Başvuran kişi:", `<@${message.author.id}> - ${message.author.username} - ${message.author.id}`).addField(`Başvurulan sunucu:`, `${sw.guild.name}`).addField(`Başvurulan sunucu üye sayısı:`, sw.memberCount).addField("Başvurulan sunucunun davet linki:", `[Tıklayınız!](${args[0]})`)) //sw.guild.name + " - Kişi sayısı: " + sw.memberCount)
})()
  
message.channel.send("Başvuru yapıldı! \nŞimdi sadece beklemelisin!")
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'başvuru',
  description: `Company Başvuru komudu`,
  usage: `Prefix(+) + başvuru [sunucu id] [sunucu davet]`
}; 
