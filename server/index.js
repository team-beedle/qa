const app = require('express')();
const { fetchProductQ, fetchA, fetchP } = require('../database/index.js');

app.get('/qa/questions/:product_id', (req, res) => {
  fetchProductQ(req.params.product_id)
    .then(({ rows }) => (
      rows.forEach((question, i) => (
       fetchA(question.question_id)
          .then((answer) => {
            question.answers = {};
            answer.rows.forEach((answer) => {
              question.answers[answer.answer_id] = answer;
              return fetchP(answer.answer_id)
                .then((photo) => {
                  answer.photos = photo.rows;
                  if (i === rows.length - 1) res.send({product_id: req.params.product_id, results: rows})
                })
                .catch((err) => console.log(err))
            })
          })
          .catch((err) => console.log(err))
      ))
    ))
    .catch((err) => console.log(err))
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  fetchA(req.params.question_id)
    .then(({ rows }) => {
      rows.forEach((answer, i) => {
        fetchP(answer.answer_id)
          .then((photos) => answer.photos = photos.rows)
          .catch((err) => console.log(err))
        if (i === rows.length - 1) res.send({question_id: req.params.question_id, results: rows})
      })
    })
    .catch((err) => console.log(err))
});

app.post('/qa/questions', (req, res) => {

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