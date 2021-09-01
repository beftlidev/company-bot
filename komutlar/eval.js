
const Util = require("util")
const Discord = require("discord.js")
const db = require("croxydb")

  exports.run = async (client, message, args) => {
   if(message.author.id !== "753842258457002036") return message.channel.send("<:bakimda:798582408642560110> Bu komut Company Ownerlarına özeldir!!")

  let arguman = args.join(" ");
  if (!arguman) return

  let executedIn = process.hrtime();
  
  function clean(msg) {
    if (typeof msg !== "string")
      msg = Util.inspect(msg, { depth: 0 });
    msg = msg
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
    
    executedIn = process.hrtime(executedIn);
    executedIn = executedIn[0] * Math.pow(10, 3) + executedIn[1] / Math.pow(10, 6);
    
    return msg;
  }
  
  try {
    const evaled = clean(await eval(arguman));
   
    const embddddd = new Discord.MessageEmbed()
   .setTitle("🥳 Kod başarıyla çalıştırıldı")
      .setDescription(`
      > Kod parçacığı \`${executedIn.toFixed(3)} ms\` de **çalıştırıldı.**
      \`\`\`js\n${evaled}\`\`\`
      `)
      .setColor("GREEN")
     message.channel.send(embddddd);
  } catch(err) {
    console.log(err)
    message.channel.send(
      new Discord.MessageEmbed()
      .setTitle("🤯 Bir hata ile karşılaşıldı")
      .setDescription(`
      \`\`\`js\n${err}\`\`\`
      `)
      .setColor("RED")
      .setTimestamp()
    );
  }
    
  }
  
exports.conf = {
  aliases: []
}
exports.help = {
  name: "eval"
}