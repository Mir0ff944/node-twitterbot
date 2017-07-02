'use consts'

const Twit = require('twit')
const access = require('./access_tokens.js')

const token = access.config


var T = new Twit({
  consumer_key: token.consumer_key,
  consumer_secret: token.consumer_secret,
  access_token: token.access_token,
  access_token_secret:  token.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
