import express from 'express';

const routes = express.Router();

import SendMessageController from './app/Controllers/SendMessageController';

routes.get('/', (require, response) =>
	response.send({ greeting: 'Send Messages!' })
);

routes.post('/sendMessage', SendMessageController.send);

export default routes;
