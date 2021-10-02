const { Pool } = require('pg');
const { user, database, host, port } = require('./config.js');

const pool = new Pool({
  user,
  database,
  host,
  port,
});

const productQAQuery = {
  name: 'product-qa-query',
  text: 'SELECT question_id, question_body, question_date, asker_name, question_helpfulness, reported FROM questions WHERE product_id = $1',
}

const aQuery = {
  name: 'a-query',
  text: 'SELECT answer_id, question_id, body, date, answerer_name, helpfulness FROM answers WHERE question_id = $1',
}

const pQuery = {
  name: 'p-query',
  text: 'SELECT id, url FROM answers_photos WHERE answer_id = $1',
}

const fetchProductQ = (productId) => pool.query(productQAQuery, [productId]);

const fetchA = (questionId) => pool.query(aQuery, [questionId]);

const fetchP = (answerId) => pool.query(pQuery, [answerId]);

module.exports = {
  fetchProductQ,
  fetchA,
  fetchP,
}
