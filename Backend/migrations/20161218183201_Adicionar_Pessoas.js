
exports.up = function(knex, Promise) {
    return knex.table("Pessoa").insert(
        {
            Nome:"Breno Ribeiro Monteiro",
            Id_pessoa: 1
        }
    ).then(() =>
        {
            console.log("Pessoa 1 inserida com sucesso");
            return knex.table("Pessoa").insert(
                {
                    Nome:"Thamires Ribeiro Monteiro",
                    Id_pessoa: 2
                }
            ).then(() =>
            {
                console.log("Pessoa 2 inserida com Sucesso");
            }
            );
        }
    );
  
};

exports.down = function(knex, Promise) {
    
};
