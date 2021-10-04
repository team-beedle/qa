const express = require('express');
const app = require('express')();
const { fetchProductQ, fetchA, fetchP, postQuest } = require('../database/index.js');

app.use(express.json());

app.get('/qa/questions/:product_id', (req, res) => {
  const output = { product_id: req.params.product_id };
  fetchProductQ(output.product_id)
    .then(({ rows }) => {
      output.results = rows;
      return Promise.all(output.results.map((question, i) => (
        fetchA(question.question_id)
          .then((answer) => {
            question.answers = {};
            return Promise.all(answer.rows.map((answer) => {
              question.answers[answer.answer_id] = answer;
              return fetchP(answer.answer_id)
                .then((photo) => {
                  answer.photos = photo.rows;
                })
                .catch((err) => console.log(err))
            }))
          })
          .catch((err) => console.log(err))
      )))
          .then(() => res.send(output))
    })
    .catch((err) => console.log(err))
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  fetchA(req.params.question_id)
    .then(({ rows }) => {
      rows.forEach((answer, i) => {
        fetchP(answer.answer_id)
          .then((photos) => {
            answer.photos = photos.rows;
            if (i === rows.length - 1) res.send({ question_id: req.params.question_id, results: rows })
          })
          .catch((err) => console.log(err))
      })
    })
    .catch((err) => console.log(err))
});

app.post('/qa/questions', (req, res) => {
  postQuest(req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => console.log(err))
});

app.post('/qa/questions/:question_id/answers', (req, res) => {

});

app.put('/qa/questions/:question_id/helpful', (req, res) => {

});

app.put('/qa/questions/:question_id/report', (req, res) => {

});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {

});

app.put('qa/asnwers/:answer_id/report', (req, res) => {

});

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));