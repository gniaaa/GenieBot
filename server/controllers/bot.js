const { Profanity, Greeting } = require('../../database-mongo/index.js');

const answerProfanity = () => {
  return new Promise((resolve, reject) => {
    Profanity.find({}).where('rnd').gte(Math.random()).limit(1).exec((err, result) => {
      if (err) reject(err);
      else resolve(result);
    })
  })
}

const answerGreeting = () => {
  return new Promise((resolve, reject) => {
    Greeting.find({}).where('rnd').gte(Math.random()).limit(1).exec((err, result) => {
      if (err) reject(err);
      else resolve(result);
    })
  })
}

module.exports = {
  answerProfanity,
  answerGreeting,
}