const Bot = require('node-telegram-bot-api');
const TOKEN = '510955923:AAESsAwYGz2OxfIVApuNVYop89HkdD8ygbc';
const bot = new Bot(token, { polling: true });

bot.on('message', message => {
  bot.sendMessage(message.chat.id, `hello, ${message.from.first_name}!`);
});
