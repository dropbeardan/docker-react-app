import express from 'express';
import axios from 'axios';
import cors from 'cors';

import SERVICE2_URL from './SERVICE2_URL.json';

const app = express();
const port = 3001;
const service2URL =
	process.env.NODE_ENV === 'development'
		? SERVICE2_URL.development
		: SERVICE2_URL.production;

app.use(cors());

app.get('/service1', (req: any, res: any) =>
	res.send('Web Service 1 Response!')
);

app.get('/service2', (req: any, res: any) =>
	axios
		.get(`${service2URL}/service2`)
		.then((response: any) => {
			res.send(response.data);
		})
		.catch((error: any) => {
			res.send(`ERROR requesting Web Service 2.\n ${error}`);
		})
);

app.listen(port, () => console.log(`WebService1 listening on port ${port}!`));
