import express, { Request, Response } from "express";
import 'dotenv/config';
import {router} from './routes/index'
import {setupYupLocale} from './shared/services/translationYup';

setupYupLocale();
const server = express();

server.use(express.json());
server.use(router);

export { server };