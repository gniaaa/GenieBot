const fs = require('fs');

const responses = [
  'I\'m quite sorry, I didn\'t quite get what you mean.',
  'I dont understand. Can you rephrase?',
  'Ehh... are you talking human?',
  'That\'s unparseable. Would you like to rephrase?',
  'I\'m sorry. I don\'t quite understand',
  'I\'m confused.',
  'I\'m a little confused by your words',
  'Can you please paraphrase that?',
  'Umm... my brain isn\'t working. Type something else please',
  'That\'s too difficult to understand. Simple english!!',
];

const stream = fs.createWriteStream('./database-mongo/tsv_files/confused.tsv');
stream.write('index\tmessage\n');
responses.forEach((response, i) => {
  stream.write(i + 1 + '\t' + response + '\n');
  stream.on('end', () => stream.end());
});