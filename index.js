const TOKEN = process.env.TELEGRAM_TOKEN || '510955923:AAESsAwYGz2OxfIVApuNVYop89HkdD8ygbc';
const TelegramBot = require('node-telegram-bot-api');
const options = {
  webHook: {
    // Port to which you should bind is assigned to $PORT variable
    // See: https://devcenter.heroku.com/articles/dynos#local-environment-variables
    port: process.env.PORT
    // you do NOT need to set up certificates since Heroku provides
    // the SSL certs already (https://<app-name>.herokuapp.com)
    // Also no need to pass IP because on Heroku you need to bind to 0.0.0.0
  }
};
// Heroku routes from port :443 to $PORT
// Add URL of your app to env variable or enable Dyno Metadata
// to get this automatically
// See: https://devcenter.heroku.com/articles/dyno-metadata
const url = process.env.APP_URL || 'https://my-test-bot-10950.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);


// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${TOKEN}`);

const normalizeString = (string) => string.toLowerCase().trim();


// Just to ping!
bot.on('message', function onMessage(msg) {
  const text = normalizeString(msg.text);

  switch (msg.text) {
    case 'данил':
      bot.sendMessage(msg.chat.id, 'Ты налил?');
      break;
    case 'здесь так красиво':
      bot.sendMessage(msg.chat.id, 'Я перестаю дышать');
      break;
    case 'звуки на минимум':
      bot.sendMessage(msg.chat.id, 'Чтобы не мешать');
      break;
    case 'все говорят ака':
      bot.sendMessage(msg.chat.id, 'а как поднять бабла?');
      break;
    case 'все говорят рушан':
      bot.sendMessage(msg.chat.id, 'ты че такой еблан?');
      break;
    case 'все говорят михрон':
      bot.sendMessage(msg.chat.id, 'ты че такой гандон');
      break;
    case 'твой флоу бред':
      bot.sendMessage(msg.chat.id, 'Ты говноед');
      bot.sendMessage(msg.chat.id, 'РРРРРаунд');
      break;
    case 'все говорят ака':
      bot.sendMessage(msg.chat.id, 'а как поднять бабла?');
      break;
  }
});
