const express = require('express');
const router = express.Router();
const line = require('@line/bot-sdk');
const config = require('../config.json');
const client = new line.Client(config);

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/webhook', (req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
        .catch((err) => {
            res.status(500).end();
        });
});

const handleEvent = (event) => {
    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null);
    }
    return client.replyMessage(event.replyToken, {
        type: 'text', text: event.message.text // 應聲蟲範例
    }).catch((err) => {
        if (err) {
            console.error(err);
        }
    });
};

module.exports = ro
