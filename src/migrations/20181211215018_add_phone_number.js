
exports.up = async function up(knex) {
  await knex.schema.table('user', t => {
    t.string('phone_number').unique()
  })
};

exports.down = async function down(knex) {
  await knex.schema.table('user', t => {
    t.dropColumn('phone_number')
  })
};
