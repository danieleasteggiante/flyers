const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./routes/routesApi')(app);

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(5000)