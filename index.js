var express = require('express');
var Web3 = require("web3");
const hexAbi = require("./hexabi");
const HEXADDR = "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39";

var app = express();
var web3 = new Web3("https://mainnet.infura.io/v3/");

var hexContract = new web3.eth.Contract(hexAbi, HEXADDR);  


app.get('/', async function (req, res) {
    var hearts = await hexContract.methods.totalSupply().call();
    var hexs = hearts/100000000;
    res.send({totalSupply:hexs});
})

app.listen(4000);
