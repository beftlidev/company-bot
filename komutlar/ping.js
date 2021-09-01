const Discord = require('discord.js');
const config = require("../ayarlar.json")
const db = require("croxydb")
exports.run = async (client, message) => {
      if(message.author.id !== "753842258457002036") return message.channel.send("<:bakimda:798582408642560110> Bu komut <@753842258457002036>' a özeldir!!")

    let data1 = db.fetch(`aciklama_753842258457002036`)

          
let d1 = client.guilds.cache.get("752164000418234448").memberCount

let dtop =  d1
const embed = new Discord.MessageEmbed()
.setDescription(`  
<:kingcompany:882536207018496040> --- King Company --- <:kingcompany:882536207018496040>
> **__[Space Giveaway #BotList](https://discord.gg/KZfAEjrPUF)__** [ \`${d1}\` ]       
`)
.setColor("BLURPLE")
.setTimestamp()

client.channels.cache.get("871440306996920390").messages.fetch("880042847796080642").then( msg => 
{
msg.edit(embed).then(() => {
message.channel.send(":tada: Tamam1!")
})


})
  }
//
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ms','ping'],
   permLevel: 0
  };
   
  exports.help = {
   name: 'edit',
   description: 'botun gecikme süresini gösterir',
   usage: 'prefix+ping'
  };

