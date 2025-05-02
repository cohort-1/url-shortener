import moment from 'moment';
import db from '../models/index.js';
import { GetRandomString, urlRegex } from '../utils/index.js';

export const urlController = async (req, res) => {
	try {
        const { og_url } = req.body;

	// validate url
	if (!urlRegex.test(og_url)) {
		throw { status: 400, message: `Invalid URL` };
	}

	const exists = await db.Url.findOne({ where: { og_url }, raw: true });

	if (exists) {
		return res.send({ data: { url: `${process.env.BASE_URL}/${exists.url}` } });
	}

    // check if url already exists
    let url = GetRandomString(8);
    let existsUrl = await db.Url.findOne({ where: { url }, raw: true });
    while (existsUrl) {
        url = GetRandomString(8);
        existsUrl = await db.Url.findOne({ where: { url }, raw: true });
    }

    // create url
    url = `${process.env.BASE_URL}/${url}`;

    const expiry_date = moment.utc().add(7, 'days').format();

    const newUrl = await db.Url.create({
        og_url,
        url,
        expiry_date,
        user_id: null,
    });

    res.status(201).json({data: {url}})
    } catch (error) {
        const status = error?.status || 500;
        console.log('status :>> ', error)
        const message = error?.message || 'Something went wrong, pls try again shortly.';
        res.status(status).json({ message });
    }
};
