import express from "express";
import mustache from 'mustache-express';
import path from 'path';
import router from './routes';
import { config } from "dotenv";

config();

function configsAplication(server: express.Express) {
    server.set('view engine', 'mustache');
    server.set('views', path.join(__dirname, 'views'));
    server.engine('mustache', mustache());

    server.use(express.static(path.join(__dirname, '../public')))
    server.use(router);
    server.use(pageNotFound);
}

function runServer(server: express.Express) {
    const port = process.env.PORT || 3000;

    server.listen(port, () => {
        console.log(`Server running in port: ${port}`);
    })
}

function pageNotFound(req: express.Request, res: express.Response) {
    res.send('Página não encontrada.');
}

function startApplication() {
    const server = express();

    configsAplication(server);
    runServer(server);
}

startApplication();