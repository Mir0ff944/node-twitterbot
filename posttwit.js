'use consts'

const Twit = require('twit')
const access = require('./access.js')
const readline = require('readline-sync')

const T = new Twit(access.config)

// setInterval(PostRandomNumber, 1000*30)
// PostTweet();

function postTweet() {

  while true{
    const tweetText = String(readline.question("What would you like to tweet?: ").trim())
    if tweetText.lenght > 140 {
      console.log(`The tweet is ${tweetText.lenght} characters, with only 140 allowed`)
    } else {break;}
  }

  const tweet = {status: tweetText}

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err){console.log(err);} else {
      console.log("Tweeted: "+data.text)
      console.log("From User: "+data.user.screen_name)}
  }
}
