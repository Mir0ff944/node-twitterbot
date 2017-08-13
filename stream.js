'use consts'

// ---- TwitBot and npm modules
const Twit = require('twit')
const access = require('./access.js')
const readline = require('readline-sync')

const T = new Twit(access.config)

exports.liveFilter = function() {
  
}
