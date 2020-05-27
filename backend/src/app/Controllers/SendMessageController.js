import Queue from '../lib/Queue';

export default {
	send(request, response) {
		const { users, message } = request.body;

		Object.values(users).map(async (user) => {
			await Queue.add('SendNewsletter', { user, message });
		});

		return response.status(200).send();
	},
};
