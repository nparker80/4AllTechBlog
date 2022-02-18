const Sequelize = require('sequelize');

require('dotenv').config();

const Sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new equelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW), {
  host: "localhost",
  dialect: "mysql",
    decimalNumbers: true,
  },
});

module.exports = sequelize;