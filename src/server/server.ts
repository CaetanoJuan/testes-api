import express, { Request, Response } from "express";

const server = express();

server.get('/', (_, res) => {
    res.send('ola');
});

export { server };