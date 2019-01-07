
exports.up = async (knex) => {
  await knex.schema.table('user', t => {
    t.string('token').unique()
  })
};

exports.down = async (knex) => {
  await knex.schema.table('user', t => {
    t.dropColumn('token')
  })
};
