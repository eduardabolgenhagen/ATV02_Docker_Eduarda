const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.listen(port,() => console.log('Porta', port));

app.get('/', (req, res) => { res.send("Server rodando")});

