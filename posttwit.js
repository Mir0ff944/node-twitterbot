'use consts'

const Twit = require('twit')
const access = require('./access.js')

const T = new Twit(access.config)

// setInterval(PostRandomNumber, 1000*30)
// PostTweet();

function PostTweet() {

  const tweet = {
    status: 'Testing out Node Twitter Bot Again'
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err){console.log(err);} else {
      console.log("Tweeted: "+data.text)
      console.log("From User: "+data.user.screen_name)}
  }
}
