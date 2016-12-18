
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists("Reserva", (table) =>
    {
        table.increments("Id_reserva");
        table.integer("Id_pessoa").notNullable();
        table.foreign("Id_pessoa").references("Pessoa.Id_pessoa");
        table.integer("Id_espaco").notNullable();
        table.foreign("Id_espaco").references("Espaco.Id_espaco");
        table.date("Data_da_reserva").notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("Reserva");
};
