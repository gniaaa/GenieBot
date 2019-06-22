var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var { db } = require('../database-mongo/index.js');
var messages = require('./controllers/messages.js');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/messages/:name', messages.getUserMessages);
app.post('/messages', messages.parseMessage);

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

