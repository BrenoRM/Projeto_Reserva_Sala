angular.module("reservaSalas").service("pessoaservice", function($http)
{
    this.buscapessoas = () => $http.get("pessoas");

    this.salvapessoa = (nova_pessoa) => $http.post("Pessoa", nova_pessoa);
});

angular.module("reservaSalas").service("espacoservice", function($http)
{
    this.buscaespacos = () => $http.get("espacos");

    this.salvaespaco = (novo_espaco) => $http.post("Espaco", novo_espaco);
});

angular.module("reservaSalas").service("reservaservice", function($http)
{
    this.buscareservas = () => $http.get("reservas");

    this.salvareserva = (nova_reserva) => $http.post("Reserva", nova_reserva);
});