const express = require('express');
const app = express();
const morgan = require("morgan");
const layout = require('./views/layout.js');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res, next) => {
    res.send(layout())
})

app.listen(3000);