/* entry file */
import express from 'express';
import 'dotenv/config';
import db from './models/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

await db.sequelize.authenticate();
console.log('Database connected.');

await db.sequelize.sync({ force: true });
console.log('Tables synced.');

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);

app.get('/', (req, res) => {
	res.status(200).json({
		success: true,
		message: 'test checked, server working',
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
