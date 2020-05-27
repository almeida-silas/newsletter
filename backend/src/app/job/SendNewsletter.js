import Mail from '../lib/Mail';

export default {
	key: 'SendNewsletter',
	options: {
		delay: 3000,
	},

	async handle({ data }) {
		const { user, message } = data;

		await Mail.sendMail({
			from: 'Silas Almeida de Sena <silasadssn@gmail.com>',
			to: `${user.name} <${user.email}>`,
			subject: message.subject,
			html: message.content,
		});
	},
};
