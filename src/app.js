import express, { raw } from 'express';
import 'dotenv/config';
import AuthRouter from './router/auth.router.js'
import UrlRouter from './router/url.router.js';
import db from './models/index.js';
import { where } from 'sequelize';


const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
	res.send('pong');
});

app.get(':/path', (req, res) => {
	const url = req.params.path;

	const exists = db.Url.findOne({ where: {url}, raw: true });

	if (!exists) {
		return res.status(404).end();
	}

	res.redirect(exists.og_url);
});

app.use('/auth', AuthRouter)
app.use('/url', UrlRouter)

export default app;