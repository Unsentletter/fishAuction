
exports.up = function(knex) {
  return knex.schema.createTable('item_for_sale', (t) => {
    t.increments('id').primary();
    t.string('name');
    t.string('price');
    t.string('description');
    t.integer('user_id').unsigned().references('id').inTable('user')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('item_for_sale');
};
