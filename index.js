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

const greeting = String(readline.question('> Hello, commands accepted:\n' + ' p: "Post"\n' + ' pi: "Post Image"\n' + ' s: "Search"\n' + ' lf: "Live Filter"\n' + '> '))

switch (greeting) {
  case 'p': post.postTweet(); break
  case 'pi': post.postMedia(); break
  case 's': get.searchTwit(); break
  case 'lf': stream.liveFilter(); break
  default: console.log(`> Command ${greeting} is not acceped. Try again!`)
}
