const Discord = require("discord.js")
const db = require("croxydb")
const {MessageButton} = require("discord-buttons")
exports.run = async (client, message, args) => {
message.delete()
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
const url6 = new MessageButton()
.setStyle("url")
.setLabel("Company Katılmak için Tıkla")
.setEmoji("882536207018496040")
.setURL("https://discord.gg/P68B2axj4M")
message.channel.send({
embed: embed,
  buttons: [url6]
}) 

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "company-text" 
}