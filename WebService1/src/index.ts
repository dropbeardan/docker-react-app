import express from 'express';

const app = express();
const port = 3000;

app.get('/service1', (req: any, res: any) =>
	res.send('Web Service 1 Response!')
);

app.listen(port, () => console.log(`WebService1 listening on port ${port}!`));
