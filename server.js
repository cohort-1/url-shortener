/* entry file */
import db from './src/models/index.js';
import app from './src/app.js';

const port = process.env.PORT;

if (!port) {
	console.log('Please define a port before running')
	process.exit(1);
}

try {
	db.sequelize.authenticate().then(() => {
	// db.sequelize.sync({ alter: true }).then(() => {
		app.listen(port, () => {
			console.log(`URL shortener service is runnig on port ${port}`);
		});
	});
	
} catch (error) {
	console.log('server dailed to start')
}