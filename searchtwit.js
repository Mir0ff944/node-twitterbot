'use consts'

const Twit = require('twit')
const access = require('./access.js')
const readline = require('readline-sync')

const T = new Twit(access.config)


function searchTwit() {

  const searchParam = {
    q: controlellr.twittag,
    count : controller.twitcount
  }

  T.get('search/tweets', searchParam, gotTweets)

  function gotTweets(err, data, response) {
    if (err) console.log(err)
    console.log(data)
  }
}
