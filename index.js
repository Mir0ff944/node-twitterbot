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

    break;
  case 'get':
    const twittag = String(readline.question("What are we looking for today?: ").trim())
    const twitcount = String(readline.question("How many are we looking for?: ").trim())
    gettwit.searchTwit()
    break;
  default:
    alert(`Command ${greeting} is not acceped`)
}
