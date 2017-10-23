var Twit = require('twit');
var configs = require('./configs.js');

var T = new Twit({
    consumer_key: configs.consumer_key,
    consumer_secret: configs.consumer_secret,
    access_token: configs.access_token,
    access_token_secret: configs.access_token_secret
});

var stream = T.stream('statuses/filter',{track:'홍준표'});
var count = 1;

var tweetStreamOn = function() {
    stream.on('tweet', function(tw){
        var text = tw.text;
        var location = tw.user.location;
        var user_name = tw.user.name;
        console.log(count++ +"."+ user_name+"/"+location+"> " + text);
    })
}

exports.tweetOn = () => {
    tweetStreamOn();
}