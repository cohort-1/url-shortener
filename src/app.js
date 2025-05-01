import express from 'express';
import 'dotenv/config';
import AuthRouter from './router/auth.router.js'
import UrlRouter from './router/url.router.js'

const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
	res.send('pong');
});

app.use('/auth', AuthRouter)
app.use('/url', UrlRouter)

export default app;