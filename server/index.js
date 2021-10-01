const app = require('express')();
const { retrieveProductQA } = require('../database/index.js');

app.get('/hello', (req, res) => {
  retrieveProductQA()
    .then(({ rows }) => console.log(rows))
  res.end();
})

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));