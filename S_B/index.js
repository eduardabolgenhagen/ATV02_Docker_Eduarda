const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const users = require('./api/products');


app.use(express.json());
app.use('/api/products', users.router);
app.listen(port,() => console.log('Porta', port));

app.get('/', (req, res) => { res.send("Server rodando")});
