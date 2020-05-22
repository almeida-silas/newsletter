const Env = use('Env');

module.exports = {
	apiKey: Env.get('API_KEY_EMAIL'),
	domain: Env.get('DOMAIN'),
};
