const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const users = require('./api/users');


app.use(express.json());
app.use('/api/users', users.router);
app.listen(port,() => console.log('Porta', port));

app.get('/', (req, res) => { res.send("Server rodando")});