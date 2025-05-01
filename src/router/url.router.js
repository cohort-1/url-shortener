import express from 'express';
import { GetRandomString, urlRegex } from '../utils/index.js';
import db from '../models/index.js';
import moment from 'moment';
// import { Signup, Login, ForgetPasswordRequest, ForgretPasswordReset } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/', async (req, res) => {
	try {
		const og_url = req.body.url;
		/* it should be valid URL */
		if (!urlRegex.test(og_url)) {
			throw { status: 400, message: `Invalid URL` };
		}
		/* url should not already exists */
		const exists = await db.Url.findOne({ where: { og_url }, raw: true });
		if (exists) {
			// 	throw { status: 400, message: `Already exists` };
			return res.send({ data: { url: exists.url } });
		}
		let url = GetRandomString(8);
		let urlExists = await db.Url.findOne({ where: { og_url }, raw: true });
		while (urlExists) {
			url = GetRandomString(8);
			urlExists = await db.Url.findOne({ where: { og_url }, raw: true });
		}
		/* create  */
		const expiry_date = moment.utc().add(7, 'days').format();
		await db.Url.create({
			og_url,
			url,
			expiry_date,
			user_id: null,
		});
		res.status(200).json({ data: { url } });
	} catch (error) {
		const status = error?.status;
		console.log('status :>> ', error);
		const message = error?.message;
		res.status(status).json({ message });
	}
});

export default router;
