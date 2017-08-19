'use consts'

// ---- TwitBot and npm modules
const Twit = require('twit')
const access = require('./access.js')
const readline = require('readline-sync')
const fs = require('file-system')

const T = new Twit(access.config)

// setInterval(PostRandomNumber, 1000*30)
// PostTweet();

exports.postTweet = function() {
  const tweetText = String(readline.question("What would you like to tweet?: ").trim())
  if (tweetText.lenght > 140) {reject(new Error(`The tweet is ${tweetText.length} characters, with only 140 allowed`))}
  const tweet = {status: tweetText}

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err){console.log(err);} else {
      console.log(`Tweeted: ${data.text}\n` +
        `From User: ${data.user.screen_name}`)}
  }
}

exports.postMedia = function() {
  const path = String(readline.question("Path to image: ").trim())
  const query = fs.readFileSync(path, {encoding: 'base64'})

  T.post('media/post', {media_data = query}, function (err,data,response) {
    const mediaIdStr = data.media_id_string
    const metaText = String(readline.question("Meta text (this would not show in the post): ").trim())
    const meta_parameters = {media_id: mediaIdStr, alt_text: {text: metaText}}

    T.post('media/metadata/create', meta_parameters, function(err,data,response) {
      if (!err) {
        const status_text = String(readline.question('Tweet text: ').trim())
        const tweet_params = { tatus: status_text, media_ids: [mediaIdStr]}

        T.post('statuses/update', tweet_params, function(err,data,response) {
          console.log(`Tweeted: ${data.text}\n` +
            `From User: ${data.user.screen_name}\n` +
            `URL: ${data.user.url}`)
        })
      }
    })
  })

}
