'use consts'

// ---- TwitBot and npm modules
const Twit = require('twit')
const access = require('./access.js')
const readline = require('readline-sync')

// ---- local modules
const post = require('./posttwit.js')
const get = require('./searchtwit.js')
const stream = require('./stream.js')

const T = new Twit(access.config)

const greeting = String(readline.question('Hello, commands accepted: \n p: "POST" \n s: "SEARCH" \n lf: "LIVE FILTER"').trim())

switch (greeting) {
  case 'p':
    post.postTweet()
    break
  case 's':
    get.searchTwit()
    break
  case 'lf':
    stream.liveFilter()
    break
  default:
    alert(`Command ${greeting} is not acceped`)
}
