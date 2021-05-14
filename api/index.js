/* eslint-disable import/extensions */
// Essential imports
import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';

// We import our routes
import catRoutes from './routes/cat.route.js';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;
const server = http.createServer(app);
const router = express.Router();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// subscribe routes
catRoutes(router);
app.use(router);

server.listen(port, () => {
  console.log('Atelier api server started - ', port);
});
