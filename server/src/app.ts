import 'reflect-metadata';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { useContainer, useExpressServer } from 'routing-controllers';
import { Container } from 'typedi';

// load environment variables
dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/swifthire';

mongoose.connect(MONGODB_URI);

mongoose.connection.on("connected", function() {
  console.log("Connected to " + MONGODB_URI);

  // setup dependency injection container
  useContainer(Container);

  // create a new express application
  const app = express();

  app.set('port', PORT);
  app.set('x-powered-by', false);

  app.use(morgan('dev'));
  app.use(cors());
  app.use(bodyParser.json());

  useExpressServer(app, {
    routePrefix: '/api',
    controllers: [__dirname + '/controllers/**/*.js']
  });

  app.listen(PORT, () => {
    console.log('SwiftHire server listening on port ' + PORT);
  });
});

mongoose.connection.on("error", function(error) {
  console.log("Connection to " + MONGODB_URI + " failed:", error);
});

mongoose.connection.on("disconnected", function() {
  console.log("Disconnected from " + MONGODB_URI);
});

process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log("Disconnected from " + MONGODB_URI + " through app termination");
    process.exit(0);
  });
});
