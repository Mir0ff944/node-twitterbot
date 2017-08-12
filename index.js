'use consts'

const Twit = require('twit')
const access = require('./access.js')
const readline = require('readline-sync')
const posttwit = require('./posttwit.js')
const gettwit = require('./searchtwit.js')

const T = new Twit(access.config)

const greeting = String(readline.question('Hello, commands accepted are "post" and "get" ').trim())

switch (greeting) {
  case 'post':
    posttwit.postTweet();
    break;
  case 'get':
    gettwit.searchTwit();
    break;
  default:
    alert(`Command ${greeting} is not acceped`)
}
