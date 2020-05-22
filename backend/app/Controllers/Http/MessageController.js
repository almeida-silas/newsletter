'use strict';

const mailgun = require('mailgun-js');

const config = require('../config/mailgun');
const { message } = require('../template/message');

const configMailgun = mailgun(config);

class MessageController {
	send(require, response) {
		const { email, subject, text } = require.body;
		const data = message(email, subject, text);

		configMailgun.messages().send(data, function (error, body) {
			if (error) {
				return response.status(500).send(error);
			}
			return response.send(body);
		});
	}
}

module.exports = MessageController;
