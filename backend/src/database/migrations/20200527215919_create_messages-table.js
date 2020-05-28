exports.up = function (knex) {
	return knex.schema.createTable('messages', (table) => {
		table.increments('id').primary().unsigned();
		table
			.integer('user_id')
			.unsigned()
			.references('id')
			.inTable('users')
			.onDelete('SET NULL');

		table.string('subject').notNullable();
		table.string('content').notNullable();
		table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
		table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('messages');
};
