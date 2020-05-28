module.exports = {
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		database: 'newsletter_db',
		user: 'root',
		password: '',
	},
	migrations: {
		directory: './src/database/migrations',
	},
	useNullAsDefault: true,
};
