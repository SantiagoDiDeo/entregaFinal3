const express = require('express');
const session = require('express-session');
const  {mongoUrl}  = require('../../enviroments/enviroment');
const app = express();
const MongoStore = require('connect-mongo');
const logger = require('../../logger/logger');


let isConnected;

const connectToDb = async () => {
  if(!isConnected) {
    await app.use(session({
      store: new MongoStore({
        mongoUrl: mongoUrl}),
        secret: 'secreto1',
        cookie: {maxAge: 60000},  
        resave: true,
        collection: 'sessions',
        saveUninitialized: true,
      }));
    
          isConected = true;
          logger.info('MongoAtlasDB Connected');
           
    return;
  } else {
    
    logger.info("Conexion existente");
    return;
  };
};


module.exports = connectToDb; 