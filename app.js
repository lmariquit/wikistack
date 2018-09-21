const express = require('express');
const app = express();
const morgan = require("morgan");

//database
const { db, Page, User } = require('./models');


db.authenticate().
then(() => {
  console.log('connected to the database');
})

//DB Syncs
const init = async () => {
    await db.sync();
    await Page.sync();
    await User.sync();
    
    app.listen(3000, () => {
        console.log('Server is up')
    });
}

init();

const layout = require('./views/layout.js');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res, next) => {
    res.send(layout())
})

