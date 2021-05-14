require('dotenv').config();

// Essential imports
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import cors from 'cors';

// We import our routes
import catRoutes from './routes/cat.route'


const app = express();
const port = process.env.SERVER_PORT;
const server = http.createServer(app);
const router = express.Router();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// subscribe routes
catRoutes(router);

app.use(router);

server.listen(port, () => {
	logger.info('Atelier api server started - ', port);
});
