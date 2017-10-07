'use strict'

const winston = require('winston')
const moment = require('moment')
const path = require('path')

process.on('uncaughtException', err => winston.error('uncaught exception: ', err))
process.on('unhandledRejection', (reason, p) => winston.error('unhandled rejection: ', reason, p))

winston.emitErrs = true
winston.exitOnError = false

module.exports = new(winston.Logger)({
    transports: [
        new(winston.transports.Console)({
            level: 'info',
            handleExceptions: true,
            prettyPrint: true,
            humanReadableUnhandledException: false,
            json: false,
            colorize: true,
            timestamp: () => moment().format('YYYY-MM-DD HH:mm:ss'),
        }),
        new(winston.transports.File)({
            level: 'info',
            filename: path.join(__dirname, '../logs/app.log'),
            handleExceptions: true,
            humanReadableUnhandledException: true,
            json: false,
            maxsize: 10242880, // ~10MB
            maxFiles: 3,
            colorize: false,
            timestamp: () => moment().format('YYYY-MM-DD HH:mm:ss'),
        })
    ],

})
