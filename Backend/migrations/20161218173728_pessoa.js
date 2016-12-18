
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists("Pessoa", (table) =>
    {
        table.increments("Id_pessoa");
        table.string("Nome").notNullable();
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists("Pessoa");
};
