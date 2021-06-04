var middleware = require('@line/bot-sdk').middleware;
var config = require('./config.json');
app.use('/webhook', middleware(config));
