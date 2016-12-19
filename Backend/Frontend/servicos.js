angular.module("reservaSalas").service("pessoaservice", function($http)
{
    this.buscapessoas = () => $http.get("pessoas");

    this.salvapessoa = (pessoa) => $http.post("Pessoa", pessoa);
});

angular.module("reservaSalas").service("espacoservice", function($http)
{
    this.buscaespacos = () => $http.get("espacos");

    this.salvaespaco = (espaco) => $http.post("Espaco", espaco);
});

angular.module("reservaSalas").service("reservaservice", function($http)
{
    this.buscareservas = () => $http.get("reservas");

    this.salvareserva = (reserva) => $http.post("Reserva", reserva);
});