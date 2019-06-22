const { Message } = require('../../database-mongo/index.js');
const parse = require('./parse.js');
const bot = require('./bot.js');

const getUserMessages = (req, res) => {
  const username = req.params.name;
  Message.find({ username }).sort({ date: 1 }).limit(10).exec((err, body) => {
    if (err) {
      res.send(404);
    } else {
      res.send(body);
    }
  })
}

const createMessage = (message, creator = 'geniebot') => {
  message.creator = creator;
  message.createdAt = Date.now();
  return new Promise((resolve, reject) => {
    Message.create(message, (err, result) => {
      if (err) reject(err);
      else {
        resolve(result);
      }
    })
  });
}

const parseMessage = (req, res) => {
  const { message } = req.body;
  createMessage(req.body, req.body.username);

  // if contains profanity
  if (parse.hasProfanity(message)) {
    bot.answerProfanity()
      .then((response) => {
        createMessage(response);
        res.send(response);
      })
      .catch(() => res.send(500))
  }

  // if is greeting
  if (parse.isGreeting(message)) {
    bot.answerGreeting()
  }

  // if is goodbye


};

module.exports = {
  getUserMessages,
  parseMessage
}