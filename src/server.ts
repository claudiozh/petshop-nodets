import express  from "express";
import { config } from "dotenv";
import mustache from 'mustache-express';
import path from 'path';

config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());