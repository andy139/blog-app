require("dotenv").config(); // make it easier when using .env variables

const database = `postgres://tzlpoemp:Chga4p0qDyQocHQDJgGZ1zlwCH-OmT6w@ruby.db.elephantsql.com:5432/tzlpoemp`

module.exports = {
    development: {
        url: database,
        dialect: 'postgres',
        native: true,
        ssl: true,
    },
    test: {
        url: database,
        dialect: 'postgres',
        native: true,
        ssl: true,
    },
    production: {
        url: database,
        dialect: 'postgres',
        native: true,
        ssl: true,
    },
}
