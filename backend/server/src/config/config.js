require("dotenv").config(); // make it easier when using .env variables

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: "postgres",
    native: true,
    ssl: true
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: "postgres",
    native: true,
    ssl: true
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    native: true,
    ssl: true
  }
};
