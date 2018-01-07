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


const daneel = [
  'Ты налил?',
  'Ты галил',
  'Ты запилил?',
  'Ты залил?',
  'Ты заплатил?',
  'Ты разбил?',
  'Ты изучил?',
  'Ты установил?',
  'Ты поразил',
  'Ты сходил?',
  'Ты утвердил?',
  'Ты победил?',
  'Ты подтвердил?'
];


// Just to ping!
bot.on('message', function onMessage(msg) {
  if (msg.text) {
    const text = normalizeString(msg.text);

    switch (text) {
      case '/pidor':
        bot.sendMessage(msg.chat.id, `Опять в свои игрульки играете? Пиздец, вам сколько уже? 24? 25? У нормальных людей уже семья, дети, а вы все генератором псевдорандомных чисел решаете кто из вас пидор в чате, охуеть можно. ${msg.from.first_name}, повзрослей, блядь.`);
      case 'данил':
        bot.sendMessage(msg.chat.id, items[Math.floor(Math.random() * daneel.length)]);
        break;
      case 'здесь так красиво':
        bot.sendMessage(msg.chat.id, 'Я перестаю дышать');
        break;
      case 'звуки на минимум':
        bot.sendMessage(msg.chat.id, 'Чтобы не мешать');
        break;
      case 'эти облака':
        bot.sendMessage(msg.chat.id, 'Фиолетовая ватааааа');
        break;
      case 'магия цветов':
        bot.sendMessage(msg.chat.id, 'со льдом в наших стаканааах');
        break;
      case 'все говорят ака':
        bot.sendMessage(msg.chat.id, 'а как поднять бабла?');
        break;
      case 'все говорят рушан':
        bot.sendMessage(msg.chat.id, 'ты че такой еблан?');
        break;
      case 'все говорят кирилл':
        bot.sendMessage(msg.chat.id, 'будь как данил');
        break;
      case 'все говорят миша':
        bot.sendMessage(msg.chat.id, 'некрасовский коп, оп, коп');
        break;
      case 'все говорят касарь':
        bot.sendMessage(msg.chat.id, 'ты че такой букварь?');
        break;
      case 'все говорят михрон':
        bot.sendMessage(msg.chat.id, 'ты че такой гандон');
        break;
      case 'твой флоу бред':
        bot.sendMessage(msg.chat.id, 'Ты говноед');
        bot.sendMessage(msg.chat.id, 'РРРРРаунд');
        break;
      case 'все говорят айдар':
        bot.sendMessage(msg.chat.id, `зачем ты ебал ${msg.from.first_name} вчера?`);
        break;
      case 'бот подтвердит':
        if (msg.from.first_name === 'Amma') {
          bot.sendMessage(msg.chat.id, `Плюсану к Айди`);
        } else {
          bot.sendMessage(msg.chat.id, `Ну хуй знает`);
        }
        break;
    }
  }
});
