const express = require("express");

const app = express();

app.listen(3000);
console.log("Server is running");

 // GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
 app.get("/numbers/add", function (req, res) {
  const first = parseInt(req.query.first);
  const second = parseInt(req.query.second);
  const sum = first + second ;
  res.send(first +" + "+ second + " = " + sum);
});

// GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
 app.get("/numbers/multiply/:first/:second", function (req, res) {
    const firstNum = parseInt(req.params.first);
    const secondNum = parseInt(req.params.second);
    const multiplication = firstNum * secondNum ;
    res.send(firstNum +" * "+ secondNum + " = " + multiplication);
  });