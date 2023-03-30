const log4js = require('log4js');

log4js.configure({
  appenders: {
    console: { type: 'console' },
    infoFile: {type: 'file', filename: 'info.log'},
    warnFile: { type: 'file', filename: 'warn.log' },
    errorFile: { type: 'file' , filename: 'error.log' },
    consoleLogger: { type: 'logLevelFilter', appender: 'console', level: 'info' },
    warnFileLogger: { type: 'logLevelFilter', appender: 'warnFile', level: 'warn' },
    errorFileLogger: { type: 'logLevelFilter', appender: 'errorFile', level: 'error' }
  }, 
  categories: {
    default: {
      appenders: ['consoleLogger', 'warnFileLogger', 'errorFileLogger'],
      level: 'all'
    }
  }
});

const logger = log4js.getLogger();

module.exports = logger;