const { Profanity, Greeting, Goodbye, Confused } = require('../../database-mongo/index.js');

const answerProfanity = () => {
  return new Promise((resolve, reject) => {
    Profanity.find({ index: Math.floor(Math.random() * 10) }, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    })
  })
}

const answerGreeting = () => {
  return new Promise((resolve, reject) => {
    Greeting.find({ index: Math.floor(Math.random() * 10) }, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    })
  })
}

const answerGoodbye = () => {
  return new Promise((resolve, reject) => {
    Goodbye.find({ index: Math.floor(Math.random() * 10) }, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    })
  })
}

const answerConfused = () => {
  return new Promise((resolve, reject) => {
    Confused.find({ index: Math.floor(Math.random() * 10) }, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    })
  })
}

module.exports = {
  answerProfanity,
  answerGreeting,
  answerGoodbye,
  answerConfused,
}