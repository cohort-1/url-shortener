import express from 'express';


const UrlRouter = express.Router();


UrlRouter.post('/', urlController);


export default UrlRouter;