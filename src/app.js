import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
	res.send('pong');
});

// app.use('/auth')

export default app;
