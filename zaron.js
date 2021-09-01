const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const disbut = require('discord-buttons');
disbut(client);
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('croxydb');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
const ms = require('ms');//
const tags = require('common-tags')
//Zaron Discord https://discord.gg/5xyRqzVTJm

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    console.log(`${files.length} Adet komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        console.log(`[KOMUT] | ${props.help.name} Eklendi.`);//
        console.log(`BU ALT YAPI SB CAN & ZARON A AITTIR`);
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});


//Zaron Discord https://discord.gg/5xyRqzVTJm

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

//Zaron Discord https://discord.gg/5xyRqzVTJm

client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
//Zaron Discord https://discord.gg/5xyRqzVTJm
client.login(process.env.token);

//------------------------KOMUTLAR------------------------\\
//Zaron Discord https://discord.gg/5xyRqzVTJm
const {
    CaptchaGenerator
} = require('captcha-canvas')
const colors = require('./colors.json')
client.on('message', async message => {

    function generateCaptcha() {
        var length = 6,
            charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

    const genCaptcha = generateCaptcha()

    const captcha = new CaptchaGenerator()
        .setDimension(150, 450)
        .setCaptcha({
            text: genCaptcha,
            size: 60,
            color: "deeppink"
        })
        .setDecoy({
            opacity: 1
        })
        .setTrace({
            color: "deeppink"
        })
    const buffer = captcha.generateSync()

    if ( /*(message.channel.id !== message.guild.channels.cache.find(c => c.name.includes("verify"))) && */ !message.content.startsWith(prefix)) return
    if (message.author.bot) return
 


    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    const newCaptcha = new Discord.MessageAttachment(buffer, 'captcha.png')

    if ( /*message.channel.id === message.guild.channels.cache.find(c => c.name.includes('verify')) && */ command === "verify") {


        message.channel.send({
            files: [newCaptcha],
            embed: {
                title: ``,
                description: `Please send the captcha code here.
 
Hello! You are required to complete a captcha before entering the server.
**NOTE:** **This is Case Sensitive.**
                            
**Why?**
This is to protect the server against
targeted attacks using automated user accounts.
                
**Your Captcha:**`,
                image: {
                    url: 'attachment://captcha.png'
                },
                color: "RANDOM"
            }
        }).then(() => {
            const filter = m => message.author.id === m.author.id;

            message.channel.awaitMessages(filter, {
                    time: 5 * 60000,
                    max: 1,
                    errors: ['time']
                })
                .then(async messages => {
                    if (messages.first().content === genCaptcha) {
                       
                        let verificationEmbed = new Discord.MessageEmbed()
                            .setAuthor(message.author.username, message.author.avatarURL({
                                dynamic: true
                            }))
                            .setColor(colors.green)
                            .setDescription(`<a:GiveawayTime:753044729696092290> **You have been verified to: \`${message.guild.name}\`!**`)
                            .setFooter(message.client.user.username, message.client.user.avatarURL())
                        /*const role = message.guild.roles.cache.find(role => role.name === "Member");
                        message.member.roles.add(role);
                        */
                        await message.channel.send(verificationEmbed).then(m => m.delete({
                            timeout: 3000
                        }))
                        console.log(`${message.author.tag} has been verified!`)
                    }

                })
               
              
                 
                        let retryEmbed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setThumbnail(message.guild.iconURL({
                            dynamic: true
                        }))
                        .setTitle("YOU HAVE FAILED THE VERIFICATION")
                        .setColor(colors.red)
                        .setDescription(`You have failed the verification in \`${message.guild.name}\`!`)
                        .setFooter(message.client.user.username, message.client.user.avatarURL())
                        message.author.send(retryEmbed)

                    })
                    
                
        
    }

})