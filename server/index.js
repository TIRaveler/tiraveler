const express = require ('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=> res.send('Hello world!'));

const server = app.listen(port, ()=>console.log(`server running on port ${port}`));

module.exports.server = server;
module.exports.app = app;
