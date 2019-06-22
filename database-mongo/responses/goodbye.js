const fs = require('fs');

const responses = [
  'Aww it\'s been nice talking to you. See you!',
  'Goodbye mate!',
  'You\'re goin already? Ok :( Bye....',
  'Byeeeeeeee *waves*',
  'Here\'s a bye from me too! :D',
  'Bye, love <3',
  'Have a lovely day!',
  'It\'s been fun. Let\'s do this again!',
  'That was a nice chat. Cya~',
  'Tatas!',
];

const stream = fs.createWriteStream('./database-mongo/tsv_files/goodbye.tsv');
stream.write('index\tmessage\n');
responses.forEach((response, i) => {
  stream.write(i + 1 + '\t' + response + '\n');
  stream.on('end', () => stream.end());
});