'use consts'

const Twit = require('twit')
const access = require('./access.js')
const readline = require('readline-sync')

const T = new Twit(access.config)


function searchTwit() {

  const twittag = String(readline.question("What are we looking for today?: ").trim())
  const twitcount = String(readline.question("How many are we looking for?: ").trim())

  const searchParam = {
    q: twittag,
    count : twitcount
  }

  T.get('search/tweets', searchParam, gotTweets)

  function gotTweets(err, data, response) {
    if (err) console.log(err)
    console.log(data)
  }
}
