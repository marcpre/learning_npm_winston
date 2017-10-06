const path = require('path')
const winston = require('winston')
//const moment = require('moment')

module.exports = () => {
  process.on('uncaughtException', err => winston.error('uncaught exception: ', err))
  process.on('unhandledRejection', (reason, p) => winston.error('unhandled rejection: ', reason, p))

  winston.emitErrs = true
  winston.exitOnError = false
  winston.level = process.env.NODE_ENV === 'production' ? 'info' : 'debug'
  winston.remove(winston.transports.Console)

  winston.add(winston.transports.Console, {
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    handleExceptions: true,
    prettyPrint: true,
    humanReadableUnhandledException: false,
    json: false,
    colorize: true,
    timestamp: new Date(),
  })

  winston.add(winston.transports.File, {
    level: 'info',
    filename: path.join(__dirname, '../logs/app.log'),
    handleExceptions: true,
    humanReadableUnhandledException: true,
    json: false,
    maxsize: 10242880, // ~10MB
    maxFiles: 3,
    colorize: false,
    timestamp: new Date(),
  })
}
