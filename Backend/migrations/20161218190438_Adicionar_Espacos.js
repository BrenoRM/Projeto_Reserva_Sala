
exports.up = function(knex, Promise) {
    return knex.table("Espaco").insert(
        {
            NomeE:"LMC1",
            Id_espaco: 1,
            Descricao: "Laboratório de Informática"
        }
    ).then(() =>
        {
            console.log("Espaco 1 inserido com sucesso");
            return knex.table("Espaco").insert(
                {
                    NomeE:"BC23",
                    Id_espaco: 2,
                    Descricao: "Sala de Aula"
                }
            ).then(() =>
            {
                console.log("Espaco 2 inserido com Sucesso");
            }
            );
        }
    );
  
};

exports.down = function(knex, Promise) {
  
};
