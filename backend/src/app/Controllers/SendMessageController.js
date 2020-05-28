import Queue from '../lib/Queue';

import connection from '../../config/database';
import UserController from '../Controllers/UserController';

export default {
	async send(request, response) {
		const { message } = request.body;

		const users = await UserController.index();

		Object.values(users).map(async (user) => {
			await Queue.add('SendNewsletter', { user, message });
		});

		return response.status(200).send();
	},

	async save(user, message) {
		const { subject, content } = message;
		const { email } = user;

		const user_id = await UserController.findId(email);

		await connection('messages').insert({
			user_id,
			subject,
			content,
		});
	},
};
