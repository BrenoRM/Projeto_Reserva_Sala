const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile);
const bodyParser = require("body-parser"); 
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(express.static("Frontend"))
app.use(bodyParser.urlencoded({extended:true}));
//Rotas GET
app.get("/pessoas" , (req, res) =>
{
    knex("Pessoa").select().then((ret) =>
    {
        res.send(ret);
    });
});
app.get("/espacos" , (req, res) =>
{
    knex("Espaco").select().then((ret) =>
    {
        res.send(ret);
    });
});
app.get("/reservas" , (req, res) =>
{
    var retorno1;
    knex("Reserva").select().innerJoin("Pessoa", "Pessoa.Id_pessoa", "=", "Reserva.Id_pessoa").
    innerJoin("Espaco", "Espaco.Id_espaco", "=", "Reserva.Id_espaco").then((ret) =>
    {
        res.send(ret);
    });
});
app.get("/espaco/:Id_Espaco/pessoas", (req,res) =>
{
    knex.select("Pessoa.Nome", "Reserva.Data_da_Reserva").from("Pessoa").innerJoin("Reserva","Pessoa.Id_pessoa", "="
    , "Reserva.Id_Pessoa")
    .where(
        {Id_Espaco:req.params.Id_Espaco}).then((ret) => res.send(ret));
});
app.get("/pessoa/:Id_Pessoa/espacos", (req,res) =>
{
    knex.select("Espaco.NomeE", "Reserva.Data_da_Reserva").from("Espaco").innerJoin("Reserva","Espaco.Id_espaco", "="
    , "Reserva.Id_espaco")
    .where(
        {Id_Pessoa:req.params.Id_Pessoa}).then((ret) => res.send(ret));
});

//Rotas POST
app.post("/pessoa", (req, res) =>
{
    var nova_pessoa = req.body;
    knex("Pessoa").insert(nova_pessoa,"Id_Pessoa").then((ret) =>
    {
        nova_pessoa.Id_Pessoa = ret[0];
        res.send(nova_pessoa);
    }).catch((err) => 
    {
        res.status(500).send(err);
    }); 
});
app.post("/espaco", (req, res) =>
{
    var novo_espaco = req.body;
    knex("Espaco").insert(novo_espaco,"Id_Espaco").then((ret) =>
    {
        novo_espaco.Id_Espaco = ret[0];
        res.send(novo_espaco);
    }).catch((err) => 
    {
        res.status(500).send(err);
    }); 
});
app.post("/reserva", (req, res) =>
{
    knex("Espaco").select("Id_espaco").where("NomeE", "=", req.body.Id_Espaco).then((ret1) => 
    {
        req.body.Id_Espaco = ret1[0].Id_espaco;
        var nova_reserva = req.body;
        knex("Reserva").insert(nova_reserva,"Id_Reserva").then((ret) =>
        {
            nova_reserva.Id_Reserva = ret[0];
            res.send(nova_reserva);
        }).catch((err) => 
        {
            res.status(500).send(err);
        }); 
    });
    
});

app.listen(8080);