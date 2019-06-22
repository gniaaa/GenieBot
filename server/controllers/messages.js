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

// create Message is a promise that saves both user and bot responses
const createUserMessage = (message, creator) => {
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

const createBotMessage = (res, username) => {
  let message = {
    message: res,
    creator: 'geniebot',
    createdAt: Date.now(),
    username,
  }
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
  createUserMessage(req.body, req.body.username);

  if (parse.hasProfanity(message)) {
    // if contains profanity

    bot.answerProfanity()
      .then((response) => {
        createBotMessage(response[0].message, req.body.username);
        res.send(response);
      })
      .catch(() => res.send(500))
  } else if (parse.isGreeting(message)) {

    // if is greeting
    bot.answerGreeting()
      .then((response) => {
        createBotMessage(response[0].message, req.body.username);
        res.send(response);
      })
      .catch(() => res.send(500))
  } else if (parse.isGoodbye(message)) {

    // if is goodbye
    bot.answerGoodbye()
      .then((response) => {
        createBotMessage(response[0].message, req.body.username);
        res.send(response);
      })
      .catch(() => res.send(500))
  } else {

  }
};

module.exports = {
  getUserMessages,
  parseMessage
}