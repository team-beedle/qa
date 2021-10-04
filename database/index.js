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
  text: `
    SELECT question_id, question_body, question_date, asker_name, question_helpfulness, reported
    FROM questions
    WHERE product_id = $1`,
}

const aQuery = {
  name: 'a-query',
  text: `
    SELECT answer_id, question_id, body, date, answerer_name, reported, helpfulness
    FROM answers
    WHERE question_id = $1`,
}

const pQuery = {
  name: 'p-query',
  text: 'SELECT id, url FROM answers_photos WHERE answer_id = $1',
}

const postQuestQuery = {
  name: 'post-quest-query',
  text: `
    INSERT INTO questions (question_id, question_body, asker_name, asker_email, product_id)
    VALUES (nextval('questions_sequence'), $1, $2, $3, $4)`,
}

const fetchProductQ = (productId) => pool.query(productQAQuery, [productId]);

const fetchA = (questionId) => pool.query(aQuery, [questionId]);

const fetchP = (answerId) => pool.query(pQuery, [answerId]);

const postQuest = ({ body, name, email, product_id}) => (
  pool.query(postQuestQuery, [body, name, email, product_id])
);

module.exports = {
  fetchProductQ,
  fetchA,
  fetchP,
  postQuest,
}
