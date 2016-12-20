
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists("Espaco", (table) =>
    {
        table.increments("Id_espaco");
        table.string("NomeE").notNullable().unique();
        table.string("Descricao").notNullable();
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("Espaco");
};
