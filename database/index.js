const { Pool } = require('pg');
const { user, database, host, port } = require('./config.js');

const pool = new Pool({
  user,
  database,
  host,
  port,
});

const retrieveProductQA = () => pool.query('SELECT question_id, question_body, question_date, asker_name, helpfulness, reported FROM questions WHERE product_id = 1');

module.exports = {
  retrieveProductQA,
}
