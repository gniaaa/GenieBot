var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/geniebot', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

var messageSchema = mongoose.Schema({
  creator: String,
  username: String,
  message: String,
  createdAt: Date,
});

var profanitySchema = mongoose.Schema({
  rnd: Number,
  response: String,
});

var greetingSchema = mongoose.Schema({
  rnd: Number,
  response: String,
});

messageSchema.index({ username: 1 });
profanitySchema.index({ rnd: 1 });
greetingSchema.index({ rnd: 1 });

var Message = mongoose.model('Message', messageSchema);
var Profanity = mongoose.model('Profanity', profanitySchema);
var Greeting = mongoose.model('Greeting', greetingSchema);

module.exports = {
  db,
  Message,
  Profanity,
  Greeting,
}