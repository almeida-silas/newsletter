module.exports = {
	message(to, subject, text) {
		const data = {
			from: 'Silas Almeida de Sena <me@samples.mailgun.org>',
			to: to,
			subject: subject,
			text: text,
		};

		return data;
	},
};
