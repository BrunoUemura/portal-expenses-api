import './EnvConfig';
import 'reflect-metadata';
import '../database/connection';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';

import { routes } from '../routes';
import { errorHandler } from './ErrorHandler';

const server = express();

server.use(
  cors({
    origin: `${process.env.GATEWAY_URL}`,
  }),
);
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(logger('dev'));
server.use(routes);
server.use(errorHandler);

export { server };
