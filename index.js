/* entry file */
import express from 'express';
import 'dotenv/config';
import db from './models/index.js';

await db.sequelize.authenticate();
console.log('Database connected.');

await db.sequelize.sync({ force: true });
console.log('Tables synced.');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
