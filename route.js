var express = require('express');
var router = express.Router();

var twit = require('./twit_crawling.js');
router.get('/', function(req, res) {
    twit.tweetOn();
    res.send('test');
})

module.exports = router;