import express from 'express';

const routes = express.Router();

import SendMessageController from './app/Controllers/SendMessageController';
import UserController from './app/Controllers/UserController';

routes.get('/', (require, response) =>
	response.send({
		greeting: 'Send Messages!',
		routes: {
			message: 'POST /message for send a message',
			user: 'POST /user for create a user',
		},
	})
);

routes.post('/message', SendMessageController.send);
routes.post('/user', UserController.store);

export default routes;
