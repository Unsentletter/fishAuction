import Knex from "knex";
export const db = Knex({
  client: 'mysql',
  connection: {
    user: 'root',
    password: 'password',
    database: 'fish_auction'
  }
});


// db('tableName').select('col1', 'col2').where('col1', 'test')
