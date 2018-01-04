const Bot = require('node-telegram-bot-api');
const TOKEN = '510955923:AAESsAwYGz2OxfIVApuNVYop89HkdD8ygbc';
const url = process.env.APP_URL || 'https://my-test-bot-10950.herokuapp.com:443';

const options = {
  webHook: {
    port: process.env.port
  }
};

const bot = new Bot(TOKEN, options);
bot.setWebHook(`${url}/bot${TOKEN}`);

bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');
});
