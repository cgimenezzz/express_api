'use strict';

// Libs
const winston = require('winston');
const moment = require('moment');
const appRoot = require('app-root-path');

class LoggerUtil {

    constructor() {

        this.options = {
            file: {
                level: 'info',
                filename: `${appRoot}/logs/app.log`,
                handleExceptions: true,
                json: true,
                maxsize: 5242880,
                maxFiles: 5,
                colorize: false,
            },
            console: {
                level: 'debug',
                handleExceptions: true,
                json: false,
                colorize: true,
            }
        };

        this.logger = winston.createLogger({
            transports: [
                new winston.transports.Console(this.options.console),
                new winston.transports.File(this.options.file)
            ]
        });
    }

    infoLevel(message) {
        this.logger.info(message, {'timestamp': moment().format()});

    }

}

module.exports = new LoggerUtil();