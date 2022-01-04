var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.post('/python', (req, res) => {
  
});

app.post('/javascript', (req, res) => {

});

app.listen(PORT, () => {
  console.log("container running");
});

