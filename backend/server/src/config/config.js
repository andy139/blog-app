require("dotenv").config(); // make it easier when using .env variables

const production = `postgres://tzlpoemp:Chga4p0qDyQocHQDJgGZ1zlwCH-OmT6w@ruby.db.elephantsql.com:5432/tzlpoemp`
const development = `postgres://ksyjogcf:rLaKML0dC_rezz_3kGhC9bQetSMbL4ru@ruby.db.elephantsql.com:5432/ksyjogcf`
module.exports = {
    development: {
        url: development,
        dialect: 'postgres',
        native: true,
        ssl: true,
    },
    test: {
        url: production,
        dialect: 'postgres',
        native: true,
        ssl: true,
    },
    production: {
        url: production,
        dialect: 'postgres',
        native: true,
        ssl: true,
    },
}
