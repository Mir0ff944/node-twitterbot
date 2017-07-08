'use consts'

const Twit = require('twit')
const access = require('./access.js')

const T = new Twit(access.config)
