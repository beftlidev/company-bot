const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`BU ALT YAPI SB CAN & ZARON A AITTIR`);
  console.log(`[BOT] | (${client.user.username}) BOT HAZIR !`);
  client.user.setStatus("idle");
  client.user.setActivity("k.yardım", { type: "WATCHING"}); //// TYPE - WATCHING , PLAYING , LISTENING gibi değiştirilebilir.
 
};
