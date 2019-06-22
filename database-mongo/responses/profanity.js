const fs = require('fs');

const responses = [
  'Hey, this is a family friendly place! Be kind',
  'That\'s not a nice thing to say',
  'How dare you!',
  'I am very disappointed in you',
  'Hey hey! No profanities allowed here',
  'No mean words against the GenieBot will be tolerated, tsk',
  'No profanities, please',
  'Please be kind to me :( I am but a bot',
  'Nice people don\'t say mean things!',
  'Tsk tsk, no bad words please'
];

const stream = fs.createWriteStream('./database-mongo/tsv_files/profanity.tsv');
stream.write('index\tmessage\n');
responses.forEach((response, i) => {
  stream.write(i + 1 + '\t' + response + '\n');
  stream.on('end', () => stream.end());
});