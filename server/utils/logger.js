import { createLogger, format } from 'winston';
const DailyRotate = require('winston-daily-rotate-file');
import fs from 'fs';

const logDir = 'log';

let infoLogger;
let errorLogger;
let warnLogger;
let allLogger;

class Logger {
  constructor() {
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir)
    }
  }

  infoLogger = createLogger({
    level: process.env.NODE_ENV === 'development' ? 'info' : 'debug',

    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.printf(info => `${info.timestamp} ${info.level} ${infor.message}`)
    ),

    transports: [
      new transports.Console({
        levels: 'info',
        format: format.combine(
          format.colorize(),
          format.printf(
            info => `${info.timestamp} ${info.level}: ${info.message}`,
          ),
        ),
      }),
      new (DailyRotate)({
        filename: `${logDir}/%DATE%-info-results.log`,
        datePattern: 'YYYY-MM-DD',
      }),
    ],
    exitOnError: false,
  })
}