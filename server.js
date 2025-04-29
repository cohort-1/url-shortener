/* entry file */
import db from './src/models/index.js';
import app from './src/app.js';
import dotenv from 'dotenv'
dotenv.config();
const port = process.env.port;

if (!port) {
	console.log('Please define a port before running');
	process.exit(1);
}

try {
	// db.sequelize.authenticate().then(() => {
	db.sequelize.sync({ alter: true }).then(() => {
		app.listen(port, () => {
			console.log(`URL shortener service is running on port ${port}`);
		});
	});
} catch (error) {
	console.log('server failed to start');
}
