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
  index: Number,
  message: String,
});

var greetingSchema = mongoose.Schema({
  index: Number,
  message: String,
});

var goodbyeSchema = mongoose.Schema({
  index: Number,
  message: String,
});

var confusedSchema = mongoose.Schema({
  index: Number,
  message: String,
});

messageSchema.index({ username: 1 });
profanitySchema.index({ index: 1 });
greetingSchema.index({ index: 1 });
goodbyeSchema.index({ index: 1 });
confusedSchema.index({ index: 1 });

var Message = mongoose.model('Message', messageSchema);
var Profanity = mongoose.model('Profanity', profanitySchema);
var Greeting = mongoose.model('Greeting', greetingSchema);
var Goodbye = mongoose.model('Goodbye', goodbyeSchema);
var Confused = mongoose.model('Confused', confusedSchema);

module.exports = {
  db,
  Message,
  Profanity,
  Greeting,
  Goodbye,
  Confused,
};