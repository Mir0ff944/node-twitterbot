'use consts'

// ---- TwitBot and npm modules
const Twit = require('twit')
const access = require('./access.js')
const readline = require('readline-sync')

const T = new Twit(access.config)

exports.liveFilter = function() {
  const keyword = String(readline.question("What are we searching for? : ").trim())

  const streamFilter = T.stream('statuses/filter', {track: keyword})

  console.log(`Listening for '${keyword}' in the Tweeter Universe ;)`)
  streamFilter.on('tweet', function(tweet) {
    console.log(`###################\n` +
      `Tweet: ${tweet.text}\n` + `Tweet id: ${tweet.id}\n` + `Date: ${tweet.created_at}\n` + `User: ${tweet.user.screen_name} from ${tweet.user.location}\n` + `In reply of: ${tweet.in_relpy_to_user_id_str}\n` +
      `> Listening for '${keyword}' in the Tweeter Universe ;)`)
  })
}
