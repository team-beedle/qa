const app = require('express')();
const pool = require('../database/index.js');

app.get('/hello', (req, res) => {
  pool.query('SELECT * FROM answers WHERE id = 1')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
  res.end();
})

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));