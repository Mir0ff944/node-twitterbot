'use consts'

// ---- TwitBot and npm mdules
const Twit = require('twit')
const access = require('./access.js')
const readline = require('readline-sync')

const T = new Twit(access.config)

exports.searchTwit = function(){
  const twittag = String(readline.question("What are we looking for today?: ").trim())
  const twitcount = String(readline.question("How many victims?: ").trim())
  const results = String(readline.question("Sort results by 'mixed', 'recent' or 'popular': ").trim())

  const searchParam = {q: twittag, count : twitcount, result_type: results}

  T.get('search/tweets', searchParam, gotTweets)

  function gotTweets(err, data, response) {
    if (err) console.log(err)

    const tweet_results = data.statuses
    // debuging
    // console.log(tweet_results[0].text)
    // console.log('################')
    for (var i = 0; i < tweet_results.length; i++) {
      console.log('################')
      console.log(`Tweet: ${tweet_results[i].text}\n` + `Tweet id: ${tweet_results[i].id}\n` + `Tweet url: ${tweet_results[i].entities.urls[0].url}\n` + `Date: ${tweet_results[i].created_at}\n` + `User: ${tweet_results[i].user.screen_name} from ${tweet_results[i].user.location}\n` +
        `In reply of: ${tweet_results[i].in_relpy_to_user_id_str}\n`)
    }
  }
}
