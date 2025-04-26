import path from 'path';
import { fileURLToPath } from 'url';
import Sequelize from 'sequelize';
import process from 'process';
import UserModel from './User.js';
import UserLoginModel from './UserLogin.js';

// Required for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || 'development';
import configFile from '../config/db.config.js'; // Use the correct config
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
const UserLogin = UserLoginModel(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;
db.UserLogin = UserLogin;

export default db;