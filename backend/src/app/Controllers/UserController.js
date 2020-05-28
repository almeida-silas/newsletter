import connection from '../../config/database';

export default {
	async index() {
		return await connection('users').select('*');
	},

	async findId(email) {
		const user = await connection('users').where({ email }).select('id');
		const { id } = user[0];

		return id;
	},

	async store(request, response) {
		const { name, email } = request.body;

		await connection('users')
			.insert({
				name,
				email,
			})
			.then(() => {
				return response.status(200).send();
			})
			.catch((error) => {
				return response.status(400).send();
			});
	},
};
