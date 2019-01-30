
exports.up = function(knex, Promise) {
  knex.schema.createTable('user', t => {
    t.string('token').notNullable()
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('user');
};
