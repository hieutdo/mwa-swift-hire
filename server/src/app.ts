import 'reflect-metadata';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as jwt from 'express-jwt';
import { Action, useContainer, useExpressServer } from 'routing-controllers';
import { Container } from 'typedi';

// load environment variables
dotenv.config();

declare const process: {
  env: {
    PORT: number,
    MONGODB_URI: string,
    AUTH0_SECRET: string,
    AUTH0_CLIENT_ID: string,
  }
  on: Function,
  exit: Function
};

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

function bootstrap() {
  // setup dependency injection container
  useContainer(Container);

  // create a new express application
  const app = express();

  app.set('port', PORT);
  app.set('x-powered-by', false);

  app.use(morgan('dev'));
  app.use(cors());
  app.use(bodyParser.json());

  const authCheck = jwt({
    secret: new Buffer(process.env.AUTH0_SECRET, 'base64'),
    audience: process.env.AUTH0_CLIENT_ID
  });

  useExpressServer(app, {
    routePrefix: '/api',
    controllers: [__dirname + '/controllers/**/*.js'],
    authorizationChecker: async (action: Action): Promise<boolean> => {
      return new Promise<boolean>((resolve) => {
        authCheck(action.request, action.response, (err) => {
          return resolve(!err);
        });
      });
    }
  });

  app.listen(PORT, () => {
    console.log('SwiftHire server listening on port ' + PORT);
  });
}

mongoose.connect(MONGODB_URI);

mongoose.connection
  .on("connected", function () {
    console.log("Connected to " + MONGODB_URI);
    bootstrap();
  })
  .on("error", function (error) {
    console.log("Connection to " + MONGODB_URI + " failed:", error);
  })
  .on("disconnected", function () {
    console.log("Disconnected from " + MONGODB_URI);
  });

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Disconnected from " + MONGODB_URI + " through app termination");
    process.exit(0);
  });
});
