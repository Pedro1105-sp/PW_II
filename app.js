const express = require('express');
const config = require('config');

const http = require('http');
const reload = require('reload');

const app = express();

app.use(require('./route'));

const server = http.createServer(app);



server.listen(
    config.get("api.porta"),
    ()=>{
        config.get("api.msg") + '-' +
        config.get("api.caminho") + ':' +
        config.get("api.porta")
    }
);

reload(app);
