import express from 'express';
import cors from 'cors';

const app = express();
const port = 3002;

app.use(cors());

app.get('/service2', (req: any, res: any) =>
	res.send('Web Service 2 Response!')
);

app.listen(port, () => console.log(`WebService2 listening on port ${port}!`));
