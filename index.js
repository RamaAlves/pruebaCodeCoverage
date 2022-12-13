const express = require('express');
const bodyParser = require('body-parser');
const adder = require('./services/adder');
const subtractor = require('./services/subtractor');
const multiplier = require('./services/multiplier');
const divider = require('./services/divider');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/add', function(req, res){
    res.send(handleCalculatorRequest(adder.add, req.query.numberA, req.query.numberB));
});

app.get('/subtract', function(req, res){
    res.send(handleCalculatorRequest(subtractor.subtract, req.query.numberA, req.query.numberB));
});

app.get('/multiply', function(req, res){
    res.send(handleCalculatorRequest(multiplier.multiple, req.query.numberA, req.query.numberB));
});

app.get('/divide', function(req, res){
    res.send(handleCalculatorRequest(divider.divide, req.query.numberA, req.query.numberB));
});

app.listen(3000);
module.exports = app;

function handleCalculatorRequest(func, numberA, numberB){
    let number1= parseInt(numberA);
    let number2= parseInt(numberB);
    let result = func(numberA,numberB);

    if (result){
        return result.toString();
    }
    throw "Error de calculo";
}