import express from 'express';

const app = express();
const port = 3002;

app.get('/service2', (req: any, res: any) =>
	res.send('Web Service 2 Response!')
);

app.listen(port, () => console.log(`WebService2 listening on port ${port}!`));
