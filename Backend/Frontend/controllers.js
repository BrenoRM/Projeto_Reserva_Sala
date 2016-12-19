angular.module("reservaSalas").controller("pessoacontroller", function(pessoaservice)
{
    this.nova_pessoa = {};

    this.listar_pessoas = () => pessoaservice.buscapessoas().then((ret) =>
    {
        this.pessoas = ret.data;
    });

    this.listar_pessoas();

    this.salvapessoa = () => 
    {
        pessoaservice.salvapessoa(this.nova_pessoa).then((ret) =>
        {
            alert("Pessoa salva com ID "+ret.data.Id_pessoa)
            this.listar_pessoas();
            this.nova_pessoa = {};
        });
    };
});

angular.module("reservaSalas").controller("espacocontroller", function(espacoservice)
{
    this.novo_espaco = {};

    this.listar_espacos = () => espacoservice.buscaespacos().then((ret) =>
    {
        this.espacos = ret.data;
    });

    this.listar_espacos();

    this.salvaespaco = () =>
    {
        espacoservice.salvaespaco(this.novo_espaco).then((ret) =>
        {
            alert("Espaco salvo com ID " + ret.data.Id_espaco);
            this.listar_espacos();
            this.novo_espaco = {};
        });
    };
});

angular.module("reservaSalas").controller("reservacontroller", function(reservaservice)
{
    this.nova_reserva = {};

    this.listar_reservas = () => reservaservice.buscarreserva().then((ret) => 
    {
        this.reservas = ret.data;
    });

    this.salvareserva = () =>
    {
        reservaservice.salvarreserva(this.nova_reserva).then((ret) =>
        {
            alert("Reserva salva com o ID " + ret.data.Id_reserva);
            this.listar_reservas();
            this.nova_reserva = {};
        });
    };
});

angular.module("reservaSalas").config(($routeProvider) => 
{
    $routeProvider.when("/pessoas" , 
    {
        controller:"pessoacontroller",
        templateUrl:"pessoas.html",
        controllerAs:"ctl"
    });

    $routeProvider.when("/espacos" , 
    {
        controller:"espacocontroller",
        templateUrl:"espacos.html",
        controllerAs:"ctl"
    });

    $routeProvider.when("/reservas" , 
    {
        controller:"reservacontroller",
        templateUrl: "reservas.html",
        controllerAs:"ctl"
    });

    $routeProvider.otherwise("/reservas");
});

