import path from 'path';
import { fileURLToPath } from 'url';
import Sequelize from 'sequelize';
import process from 'process';
import UserModel from './User.js';
import UrlModel from './Url.js';
import ExpiredUrlModel from './ExpiredUrl.js';

// Required for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || 'development';
import configFile from '../config/config.js'; // Use the correct config
const config = configFile[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.url, {
		...config,
		logging: false,
	});
}

const User = UserModel(sequelize);
const Url = UrlModel(sequelize);
const ExpiredUrl = ExpiredUrlModel(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;
db.Url = Url;
db.ExpiredUrl = ExpiredUrl;

export default db;
