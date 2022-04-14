const express = require('express');
const res = require('express/lib/response');

const root = './';

const router = express.Router();

router.get( // R - READ
    "/",(req, res)=>{
        res.sendFile(__dirname + "/html/index.html"), {root};
    }
);

router.get( // R - READ
    "/get",(req, res)=>{
        res.send("RESPOSTA GET!!"), {root};
    }
);

router.post( // C - CREATE
    "/post",(req, res)=>{
        res.send("RESPOSTA POST!!");
    }
);

router.put( // U - UPDATE
    "/put",(req, res)=>{
        res.send("RESPOSTA PUT!!");
    }
);

router.delete( // D - DELETE
    "/delet",(req, res)=>{
        res.send("RESPOSTA DELETE!!");
    }
);

module.exports = router;