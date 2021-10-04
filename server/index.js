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
              if (answer.reported) return;
              question.answers[answer.answer_id] = answer;
              return fetchP(answer.answer_id)
                .then((photo) => {
                  answer.photos = photo.rows;
                })
                .catch((err) => res.sendStatus(500))
            }))
          })
          .catch((err) => res.sendStatus(500))
      )))
          .then(() => {
            output.results = output.results.filter((question) => !question.reported)
            res.send(output)
          })
    })
    .catch((err) => res.sendStatus(500))
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  const output = { question_id: req.params.question_id };
  fetchA(output.question_id)
    .then(({ rows }) => {
      output.results = rows;
      return Promise.all(output.results.map((answer, i) => (
        fetchP(answer.answer_id)
          .then((photos) => {
            answer.photos = photos.rows;
          })
          .catch((err) => res.sendStatus(500))
      )))
    })
    .then(() => {
      output.results = output.results.filter((answer) => !answer.reported)
      res.send(output)
    })
    .catch((err) => res.sendStatus(500))
});

app.post('/qa/questions', (req, res) => {
  postQuest(req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => res.sendStatus(500))
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