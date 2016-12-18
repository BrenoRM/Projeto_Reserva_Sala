const knex = require("knex")(
    {
        client: "sqlite3",
        connection: 
        {
            filename: "./dev"
        },
        useNullAsDefault: true
    }
);

module.exports = knex;