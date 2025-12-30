const winston=require("winston");
const { LOG_DB_URL } = require("./server.config");
require("winston-mongodb");
const allowedTransports=[];

//this tells winston to log to the console
allowedTransports.push(new winston.transports.Console({
    //to define the format of the log that we are displaying in the console
    format:winston.format.combine(
        winston.format.colorize(),
        //winston.format.simple(),
         winston.format.timestamp({
            format:"YYYY-MM-DD HH:mm:ss"
        }),
        //second argument to the combine method, which defines what is exactly going to be printed in the log
        //printf will tell how the log message will actually be printed

        //log levels: from highest to lowest priority
        //error warn info http verbose debug silly 
        winston.format.printf((log)=>`${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

//the below transport configuration enables logging to MongoDB
allowedTransports.push(new winston.transports.MongoDB({
    db: LOG_DB_URL,
    //only error logs will be stored in the database
    level: "error",
    collection:"logs",
}))

allowedTransports.push(new winston.transports.File({
    filename: `app.log`,
    level: "error"
}))

const logger=winston.createLogger({
    //default formatting

    //format tells whether the log that you are displaying in the file or console, then how it should be printed what should be its format
    format:winston.format.combine(
        //first argument in the combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format:"YYYY-MM-DD HH:mm:ss"
        }),
        //second argument to the combine method, which defines what is exactly going to be printed in the log
        //printf will tell how the log message will actually be printed

        //log levels: from highest to lowest priority
        //error warn info http verbose debug silly 
        winston.format.printf((log)=>`${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),

    //createLogger expects 2 arguments: format and transports, transports is an array which tells where should all your logs go
    //eg: in a file or in console or somewhere else

    transports:allowedTransports
})

module.exports=logger;