const { Pool } = require('pg');
const { user, database, host, port } = require('./config.js');

const pool = new Pool({
  user,
  database,
  host,
  port,
});

module.exports = pool;
