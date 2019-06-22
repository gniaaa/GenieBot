const fs = require('fs');

const responses = [
  'Hello! It\'s a nice day isn\'t it?',
  'Hiiii. Nice to meet you',
  'Sup sup',
  'Hello, my friend',
  'Hey there!!! *waves*',
  'Howdy howdy!',
  'Hellooooooo!',
  'Yoyo, what\'s up?',
  'Hi, I\'m the Genie Bot',
  'G\'day! How can I help you?'
];

const stream = fs.createWriteStream('./database-mongo/tsv_files/greeting.tsv');
stream.write('index\tmessage\n');
responses.forEach((response, i) => {
  stream.write(i + 1 + '\t' + response + '\n');
  stream.on('end', () => stream.end());
});