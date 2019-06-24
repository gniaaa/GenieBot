const { Profanity, Greeting, Goodbye, Confused } = require('../../database-mongo/index.js');
const { OPENW_API_KEY } = require('../../openweather.config');
const { ACCU_API_KEY } = require('../../accuweather.config');
const request = require('request');

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

const answerWeather = () => {
  const locationKey = 347629;
  return new Promise((resolve, reject) => {
    request(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${ACCU_API_KEY}`, (err, response, body) => {
      if (err) reject(err);
      else {
        const data = JSON.parse(body);
        const message = `It will be ${data.Headline.Text.toLowerCase()}. Min temp is ${data.DailyForecasts[0].Temperature.Minimum.Value}F and max temp is ${data.DailyForecasts[0].Temperature.Maximum.Value}F`
        resolve(message);
      }
    })
  })
}

module.exports = {
  answerProfanity,
  answerGreeting,
  answerGoodbye,
  answerConfused,
  answerWeather
}