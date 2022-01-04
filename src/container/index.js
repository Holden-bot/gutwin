var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.post('/', (req, res) => {
  res.setHeader('Content-Type', 'application-json');
  // execute the passed in code
});

app.listen(PORT, () => {
  console.log("container running");
});

